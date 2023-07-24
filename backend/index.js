require('dotenv').config()

const cookieParser = require("cookie-parser");
const jsonwebtoken = require('jsonwebtoken');
const bodyParser = require("body-parser");
const color = require('./src/colors');
const express = require('express');
const path = require('path');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));

app.post('/register',(req,res)=>{
    let usr = jsonwebtoken.decode(req.body.credential);
    if(usr){
        res.cookie('login',req.body.credential);
        res.sendStatus(200);
    }else{
        res.sendStatus(401);
    }
});

app.post('/',(req,res)=>{
    if('bookRide' in req.body){
        console.log(req.body)
        res.sendStatus(200);
        return true;
    }
});

app.listen(process.env.PORT || 3000, ()=>{console.log(`\n${color.FgGreen}AceRide${color.Reset} Backend Server Started At Port ${color.FgYellow}${process.env.PORT || 3000}\n${color.Reset} - ${color.FgBlue}http://localhost:${process.env.PORT || 3000}/\n${color.Reset}`)});