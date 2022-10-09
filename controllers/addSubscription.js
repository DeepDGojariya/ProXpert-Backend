//Imports
const User = require('../models/User')

//addSubscription controller
const addSubscription = async (req, res) => {
    const { name } = req.body
    const user = User.findOne({ username: name })
    if (!user) {
        return res.status(404).json({ success: false, message: "User Does not exists." })
    } else {
        const response = await User.findOneAndUpdate({ username: name }, {subscribed:true}, { new: true, runValidators: true })
        return res.status(201).json({ success: true, newUserData: response })
    }
}

module.exports = addSubscription


// const updateInfo = async(req,res)=>{
//     const user = User.findOne({_id:req.params.id})
//     if(!user){
//         return res.status(404).json({success:false,message:"User Does not exists."})
//     }else{
//         const response = await User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
//         return res.status(201).json({success:true,newUserData:response})
//     }
// }