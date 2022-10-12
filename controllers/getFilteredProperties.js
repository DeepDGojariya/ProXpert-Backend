//Imports
const Property = require('../models/Property')

//getFilteredProperties controller
const getFilteredProperties = async(req,res)=>{
    const type = req.query.type
    const location = [req.query.location]
    
    try {
        const properties = await Property.find({$and:[{status:"approved"},{type:type},{location:{$in:location}}]})
        if(properties.length===0){
            return res.status(404).json({success:true,message:"No Properties Found"})
        }
        let propertiesData = []
        properties.map(property=>{
            propertiesData.push({
                id:property._id,
                title:property.title,
                address:property.address,
                location:property.location,
                locality:property.locality,
                noBHK:property.noBHK,
                type:type
            })
        })
        return res.status(200).json({success:true,propertiesData})
    } catch (error) {
        return res.status(400).json({success:false,error})
    }
}

module.exports =  getFilteredProperties