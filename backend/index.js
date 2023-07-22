require('dotenv').config()

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const color = require('./src/colors');
const express = require('express');
const path = require('path');

const jsonwebtoken = require('jsonwebtoken');

const app = express();
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
})

app.listen(process.env.PORT || 3000, ()=>{console.log(`\n${color.FgGreen}AceRide${color.Reset} Backend Server Started At Port ${color.FgYellow}${process.env.PORT || 3000}\n${color.Reset} - ${color.FgBlue}http://localhost:${process.env.PORT || 3000}/\n${color.Reset}`)});