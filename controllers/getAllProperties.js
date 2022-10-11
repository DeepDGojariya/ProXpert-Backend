//Imports
const Property = require('../models/Property')

//getAllProperties controller
const getAllProperties = async(req,res)=>{
    try{
        const properties = await Property.find({status:"approved"})
        if(!properties){
            return res.status(404).json({success:false,message:"No Properties Found"})
        }else{
            let propertyArr = []
            properties.map(property=>{
                propertyArr.push({
                    id:property._id,
                    title:property.title,
                    address:property.address,
                    location:property.address,
                    locality:property.locality,
                    noBHK:property.noBHK,
                    type:property.type,
                    owner:property.owner
                })
            })
            return res.status(200).json({success:true,properties:propertyArr})
        }
    }catch(error){
        return res.status(400).json({success:false,error})
    }
}

module.exports = getAllProperties
