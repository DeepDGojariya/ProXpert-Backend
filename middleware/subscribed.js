//Imports
const User = require('../models/User')

const subscribed = async(req,res,next)=>{
    const name = req.body.name
    const user = await User.findOne({username:name})
    if(user.length===0){
        return res.status(404).json({success:false,message:"Forbidden request."})
    }else{
        if(user.subscribed===true){
            next()
        }else{
            return res.status(200).json({success:false,message:"Please subscribe to add an enquiry."})
        }
    }
}

module.exports = subscribed