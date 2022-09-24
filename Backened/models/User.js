const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Schema for user
const UserSchema = new Schema({
    name:
    {
        type: String,
        required: true
    },
    mobile:{
        type:String,
        required:true,
        maxLength:10
    },
    password: {
        type: String,
        required: true
    }
});

// creating Blog model with collection name blogs
const User = mongoose.model('user', UserSchema);

module.exports = User;