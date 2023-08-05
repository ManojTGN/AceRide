const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
    owner:{
        name:{required:true,type:String},
        email:{required:true,type:String},
        picture:{required:true,type:String},
    },

    name:{required:true,type:String},
    bookedDateTime:{required:true,type:String},

    fromPlace:{required:true,type:String},
    toPlace:{required:true,type:String},
    distance:{required:true,type:Number},

    totalPeople:{required:true,type:Number},
    vehicle:{required:true,type:String},

    rideRating:{required:true,type:Number},
    isDriverAssigned:{required:true,type:Boolean},
    driver:String,

    dateTimeType:{required:true,type:String},
    time:{required:false,type:String},
    date:{required:false,type:String},

    price:{required:true,type:Number,default:0},
    paymentType:{required:true,type:String},
    isPaymentDone:{required:true,type:Boolean},

    friends:{required:true,type:Array},
    isRideStart:{required:true,type:Boolean},
    isRideActive:{required:true,type:Boolean},

    isRideSuccess:{required:true,type:Boolean},
    failedRideReason:{required:true,type:String},

    rideStartOTP:{required:true,type:Number},
    rideEndOTP:{required:true,type:Number}
});

module.exports = mongoose.model('Ride',rideSchema);