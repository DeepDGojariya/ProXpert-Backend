//Imports
const Property = require('../models/Property')

// getOwnerInfo controllers
const getOwnerInfo = async(req,res)=>{
    try {
        const propertyData = await Property.findById(req.params.id).lean()
        if(propertyData){
            const ownerData = propertyData.owner
        }else{
            return res.status(400).json({success:false,message:"Could not retrieve owner data"})
        }
        return res.status(200).json({success:true,ownerData})
        
    } catch (error) {
        return res.status(400).json({success:false,error})  
    }
}

module.exports = getOwnerInfo