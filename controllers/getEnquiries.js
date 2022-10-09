//Imports
const PropertyEnquiry = require('../models/PropertyEnquiry')

//getEnquiries controller
const getEnquiries = async(req,res)=>{
    try {
        const enquiries = await PropertyEnquiry.findById(req.params.id)
        const buyersList = []
        enquiries.buyersList.map(buyer=>{
            buyersList.push({
                name:buyer.name,
                email:buyer.email,
                number:buyer.number
            })
        })
        return res.status(200).json({success:true,buyersList})        
    } catch (error) {
        return res.status(400).json({success:false,error})
    }

}

module.exports = getEnquiries