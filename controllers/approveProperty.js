const Property = require('../models/Property')

const approveProperty = async(req,res)=>{
    const property = await Property.findByIdAndUpdate(req.params.id,{status:"approved"}, { new: true, runValidators: true })
    return res.status(201).json({ success: true, property: property })
}

module.exports = approveProperty