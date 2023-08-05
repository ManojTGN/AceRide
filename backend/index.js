require('dotenv').config()

const cookieParser = require("cookie-parser");
const jsonwebtoken = require('jsonwebtoken');
const bodyParser = require("body-parser");
const { randomInt, randomBytes } = require('crypto');
const color = require('./src/colors');
const express = require('express');
const path = require('path');
const cors = require('cors');
require('./src/database');

const app = express();
app.use(cors({
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    origin: ['http://localhost:3000']
}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));


/* 
 * DATABASE SCHEMAS
 */
const userSchema = require('./schemas/user');
const rideSchema = require('./schemas/ride');

function delay(){
    let i = 0;
    for(i; i < 999999999; i+=2) i--;
    return i;
}

app.post('/register',async (req,res)=>{
    let rqusr = jsonwebtoken.decode(req.body.credential);
    if(!rqusr){ res.sendStatus(403);return;}

    res.cookie('login',req.body.credential);
    let dbuser = await userSchema.find({email:rqusr.email});

    if(dbuser.length === 0){
        rqusr = await userSchema.create({
            name:rqusr.name,
            email:rqusr.email,
            picture:rqusr.picture,
        
            totalRides:0,
            friends:[],
        
            isInActiveRide:false,
            totalActiveRide:0,
        
            ignoredDriver:[],
        });
        await rqusr.save();
    }
    
    res.sendStatus(200);
});

app.post('/',async (req,res)=>{

    if(!('login' in req.cookies) || jsonwebtoken.decode(req.cookies.login) == null){
        res.sendStatus(401);
        return;
    }

    let user = jsonwebtoken.decode(req.cookies.login);

    if('cancelRide' in req.body){
        await rideSchema.updateOne({_id:req.body._id},{
            isRideActive:false,
            isRideStart:false,
            isRideSuccess:false,
            failedRideReason:'Cancelled By The User'
        });
        res.sendStatus(200);
        return;
    }

    if('getRide' in req.body){
        // delay();
        if(req.body.rideType==='ACTIVE'){
            let result = await rideSchema.find({owner:{name:user.name,email:user.email,picture:user.picture},isRideActive:true});
            res.send(result);
            return;
        }

        if(req.body.rideType==='SINGLE'){
            let result = await rideSchema.findOne({_id:req.body._id});
            res.send(result);
            return;
        }

        if(req.body.rideType==='ALL'){
            let result = await rideSchema.find({owner:{name:user.name,email:user.email,picture:user.picture}});
            res.send(result);
            return;
        }

        return;
    }

    if('bookRide' in req.body){
        delay();

        try{
        let ride = await rideSchema.create({
            owner:{
                name:user.name,
                email:user.email,
                picture:user.picture
            },

            name:req.body.from+' to '+req.body.to,
            bookedDateTime:new Date().toLocaleDateString()+' '+new Date().toLocaleTimeString(),

            fromPlace:req.body.from,
            toPlace:req.body.to,
            distance:0,

            totalPeople:req.body.people,
            vehicle:req.body.vehicle,

            rideRating:0,
            isDriverAssigned:false,
            /* driver:0,*/

            dateTimeType:req.body.dt_type,
            time:req.body.time,
            date:req.body.date,

            price:req.body.price?req.body.price:0,
            paymentType:req.body.paymentType,
            isPaymentDone:req.body.paymentStatus,

            friends:[],
            isRideStart:false,
            isRideActive:true,

            isRideSuccess:false,
            failedRideReason:"None",

            rideStartOTP:randomInt(99999,999999),
            rideEndOTP:randomInt(99999,999999)
        });

        await ride.save();
        res.sendStatus(200);
        }catch(err){
            console.log(err);
            res.sendStatus(406);
        }
        return;
    }

    if('rateRide' in req.body){
        await rideSchema.updateOne({_id:req.body._id},{rideRating:req.body.rideRating})
        res.sendStatus(200);
        return
    }
});

app.listen(process.env.PORT || 3000, ()=>{console.log(`\n${color.FgGreen}AceRide${color.Reset} Backend Server Started At Port ${color.FgYellow}${process.env.PORT || 3000}\n${color.Reset} - ${color.FgBlue}http://localhost:${process.env.PORT || 3000}/\n${color.Reset}`)});