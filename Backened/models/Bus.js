const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Schema for user
const UserSchema = new Schema({
    number_plate:
    {
        type:String,
        required:true
    },
    source:{
        type:String,
        require:true
    },
    destination:{
        type:String,
        required:true
    },
    current_location:{
        type:String
    },
    available_seats:{
        type:Number,
        min:0
    }
});

// creating Blog model with collection name blogs
const Bus = mongoose.model('bus', UserSchema);

module.exports = Bus;