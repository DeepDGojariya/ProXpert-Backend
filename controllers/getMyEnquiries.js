//Imports
const PropertyEnquiry = require('../models/PropertyEnquiry')

//getMyEnquiries controller

const onlyUnique = (value, index, self) =>{
    return self.indexOf(value) === index;
  }

const getMyEnquiries = async(req,res)=>{
    try {
        const enquiries = await PropertyEnquiry.find({})
        let propertyIds = []
        enquiries.map(enquiry=>{
            enquiry.buyersList.map(buyer=>{
                if(buyer.name===req.params.username){
                    propertyIds.push(enquiry._id)
                }
            })
        })
    
        propertyIds = propertyIds.filter(onlyUnique)
        return res.status(200).json({success:true,propertyIds})
    } catch (error) {
        return res.status(400).json({success:true,error})
    }

    

}

module.exports = getMyEnquiries