//Imports
const PropertyEnquiry = require('../models/PropertyEnquiry')

// enquireProperty controller
const addEnquiry = async (req, res) => {
    const { name, email, number } = req.body
    try {
        const property = await PropertyEnquiry.findOne({ _id: req.params.id }).lean()
        if (!property) {
            const response = await PropertyEnquiry.create({
                _id: req.params.id,
                buyersList: [{ name, email, number }]
            })
            return res.status(200).json({ success: true ,message:"Added enquiry"})
        } else {
            const response = await PropertyEnquiry.updateOne(
                { _id: req.params.id },
                { $push: { buyersList: req.body } }
            )
            return res.status(200).json({ success: true,message:"Added enquiry"})
        }
    } catch (error) {
        return res.status(200).json({ success: false,error})
    }
}

module.exports = addEnquiry