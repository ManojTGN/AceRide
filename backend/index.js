require('dotenv').config()

const express = require('express');
const color = require('./src/colors');

const app = express();

app.get('/',(res,req)=>{
    
})

app.listen(process.env.PORT || 3000, ()=>{console.log(`\n${color.FgGreen}AceRide${color.Reset} Backend Server Started At Port ${color.FgYellow}${process.env.PORT || 3000}\n${color.Reset} - ${color.FgBlue}http://localhost:${process.env.PORT || 3000}/\n${color.Reset}`)});