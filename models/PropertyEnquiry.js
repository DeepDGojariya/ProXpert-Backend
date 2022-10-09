//Imports
const mongoose = require('mongoose')

//Declaring the Schema
const PropertyEnquirySchema = new mongoose.Schema({
    buyersList:[{
        name:{type:String,required:true},
        email:{type:String,required:true},
        number:{type:Number,required:true}
    }]

    
},
{collection:'PropertyEnquiries'}
)

const model = mongoose.model('PropertyEnquirySchema', PropertyEnquirySchema)
module.exports = model
