//Imports
const mongoose = require('mongoose')

//Declaring the Schema
const PropertySchema = new mongoose.Schema({
    owner:{
        name:{type:String,required:true},
        email:{type:String,required:true},
        number:{type:Number,required:true}
    },
    title:{type:String,required:true},
    address:{type:String,required:true},
    location:{type:String,required:true},
    locality:{type:String,required:true},
    noBHK:{type:String,required:true},
    type:{type:String,required:true},
    status:{type:String,default:"pending",required:true}
},
{collection:'Properties'}
)

const model = mongoose.model('PropertySchema', PropertySchema)
module.exports = model
