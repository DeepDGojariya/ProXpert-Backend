//Imports
const User = require('../models/User')

//deleteMyProperty controller
const deleteUser = async(req,res)=>{
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        return res.status(200).json({success:true,message:"Deleted User successfully."})
    } catch (error) {
        return res.status(400).json({success:false,error})
    }
}

module.exports = deleteUser