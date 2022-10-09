//Imports
const mongoose = require('mongoose')

//Declaring the Schema
const UserSchema = new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    number:{type:Number,required:true},
    password:{type:String,required:true},
    subscribed:{type:Boolean,default:false}
},
{collection:'Users'}
)

const model = mongoose.model('UserSchema', UserSchema)
module.exports = model
