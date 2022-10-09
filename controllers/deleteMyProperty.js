//Imports
const Property = require('../models/Property')

//deleteMyProperty controller
const deleteMyProperty = async(req,res)=>{
    try {
        const property = await Property.findByIdAndDelete(req.params.id)
        return res.status(200).json({success:true,message:"Deleted listing successfully."})
    } catch (error) {
        return res.status(400).json({success:false,error})
    }
}

module.exports = deleteMyProperty