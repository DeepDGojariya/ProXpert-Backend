//Imports
const Property = require('../models/Property')

//getProperty controller
const getProperty = async(req,res)=>{
    try {
        const property = await Property.findById(req.params.id)
        if(property){
            const response = {
                id:property._id,
                title:property.title,
                address:property.address,
                location:property.location,
                locality:property.locality,
                noBHK:property.noBHK,
                type:property.type,
                owner:property.owner
            }
            return res.status(200).json({success:true,property:response})        
        }else{
            return res.status(400).json({success:false,message:"No Property Found"})        
        }
        
    } catch (error) {
        return res.status(400).json({success:false,error})        
    }
}

module.exports = getProperty


