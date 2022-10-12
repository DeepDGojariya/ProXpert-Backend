//Imports
const Users = require('../models/User')

//getUsers controller
const getUsers = async(req,res)=>{
    try{
        
        let users = await Users.find({})
        
        if(!users){
            return res.status(404).json({success:false,message:"No Users Found"})
        }else{
            let userArr = []
            users.map(user=>{
                userArr.push({
                    id:user._id,
                    username:user.username,
                    email:user.email,
                    number:user.number,
                    subscribed:user.subscribed,
                })
            })
            return res.status(200).json({success:true,users:userArr})
        }
    }catch(error){
        return res.status(400).json({success:false,error})
    }
}

module.exports = getUsers
