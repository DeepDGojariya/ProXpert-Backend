//Imports
const Property = require('../models/Property')

// getMyPropertyListings controller
const getMyPropertyListings = async(req,res)=>{
    try {
        const myProperties = await Property.find({"owner.name":req.params.username})
        if(!myProperties){
            return res.status(404).json({success:false,message:"No Properties Found"})
        }else{
            let propertyArr = []
            myProperties.map(property=>{
                propertyArr.push({
                    id:property._id,
                    title:property.title,
                    address:property.address,
                    location:property.address,
                    locality:property.locality,
                    noBHK:property.noBHK,
                    type:property.type,
                    status:property.status
                })
            })
            return res.status(200).json({success:true,myProperties:propertyArr})
        }
    } catch (error) {
        return res.status(404).json({success:false,error})
    }
}

module.exports = getMyPropertyListings