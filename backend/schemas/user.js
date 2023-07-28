const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{required:true,type:String},
    email:{required:true,type:String},
    picture:{required:true,type:String},

    totalRides:{required:true,type:Number},
    friends:{required:true,type:Array},

    isInActiveRide:{required:true,type:Boolean},
    totalActiveRide:{required:true,type:Number},

    ignoredDriver:{required:true,type:Array},
});

module.exports = mongoose.model('User',userSchema);