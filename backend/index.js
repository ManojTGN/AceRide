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
const settingsSchema = require('./schemas/settings');

function delay(){
    let i = 0;
    for(i; i < 999999999; i+=2) i--;
    return i;
}

/*
 * LOGGING REQUESTS
 */

function log(requestURL, requestContent, resCode ){
    console.log(`${color.FgWhite}[${color.FgGray}${new Date().toLocaleTimeString()}${color.FgWhite}] ${color.FgYellow}${requestURL}${color.FgWhite} -> ${requestContent} ${resCode?`${color.FgGreen}Success`:`${color.FgRed}Failed`}${color.Reset}`);
}

/* 
 * REQUEST HANDLING
 */

app.post('/register',async (req,res)=>{
    let rqusr = jsonwebtoken.decode(req.body.credential);
    if(!rqusr){ res.sendStatus(403);return;}

    res.cookie('login',req.body.credential);
    let dbuser = await userSchema.find({email:rqusr.email});

    if(!dbuser || dbuser.length === 0){
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

        let setting = await settingsSchema.create({
            email:rqusr.email,
            language:'en-US',
            affectSettingLang:false,
            theme:'emeraldgreen',
        });
        await setting.save();
    }

    res.sendStatus(200);//dbuser && dbuser.length != 0 ? dbuser[0]:rqusr
    log('/register',undefined,true);
});

app.post('/',async (req,res)=>{

    if(!('login' in req.cookies) || jsonwebtoken.decode(req.cookies.login) == null){
        res.sendStatus(401);
        return;
    }

    let user = jsonwebtoken.decode(req.cookies.login);

    if('getHome' in req.body){
        await delay();
        let activeRides = await userSchema.findOne({owner:{name:user.name,email:user.email,picture:user.picture},isRideActive:true}); 
        let _user = await userSchema.findOne({email:user.email});
        let settings = await settingsSchema.findOne({email:user.email});

        res.send({rides:activeRides,user:_user,settings});
        log('/','getHome',true);
        return;
    }

    if('cancelRide' in req.body){
        await rideSchema.updateOne({_id:req.body._id},{
            isRideActive:false,
            isRideStart:false,
            isRideSuccess:false,
            failedRideReason:'Cancelled By The User'
        });
        res.sendStatus(200);
        log('/','cancelRide',true);
        return;
    }

    if('getRide' in req.body){
        // delay();
        if(req.body.rideType==='ACTIVE'){
            let result = await rideSchema.find({owner:{name:user.name,email:user.email,picture:user.picture},isRideActive:true});
            res.send(result);
            log('/','getRide (ACTIVE)',true);
            return;
        }

        if(req.body.rideType==='SINGLE'){
            let result = await rideSchema.findOne({_id:req.body._id});
            res.send(result);
            log('/','getRide (SINGLE)',true);
            return;
        }

        if(req.body.rideType==='ALL'){
            let result = await rideSchema.find({owner:{name:user.name,email:user.email,picture:user.picture}});
            res.send(result);
            log('/','getRide (ALL)',true);
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
        log('/','bookRide',true);

        }catch(err){
            res.sendStatus(406);
            log('/','bookRide',false);
            console.log(err);
        }
        return;
    }

    if('rateRide' in req.body){
        await rideSchema.updateOne({_id:req.body._id},{rideRating:req.body.rideRating})
        res.sendStatus(200);
        log('/','rateRide',true);
        return
    }

    if('getSettings' in req.body){
        let settings = await settingsSchema.findOne({email:user.email});
        res.send(settings);
        log('/','getSettings',true);
        return;
    }

    if('setSettings' in req.body){
        let oldSettings = await settingsSchema.findOne({email:user.email});
        await settingsSchema.updateOne({email:user.email},{...req.body.settings});
        await userSchema.updateOne({email:user.email},{...req.body.user});

        if(JSON.stringify(oldSettings) === JSON.stringify(req.body.settings))res.sendStatus(201);
        else res.sendStatus(200);

        log('/','setSettings',true);
        return;
    }

    if('logout' in req.body){
        res.clearCookie("login");
        res.sendStatus(200);

        log('/','logout',true);
        return;
    }
});


app.listen(process.env.PORT || 3000, ()=>{console.log(`\n${color.FgGreen}AceRide${color.Reset} Backend Server Started At Port ${color.FgYellow}${process.env.PORT || 3000}\n${color.Reset} - ${color.FgBlue}http://localhost:${process.env.PORT || 3000}/\n${color.Reset}`)});