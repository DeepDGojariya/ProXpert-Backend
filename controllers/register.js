//Imports
const bcrypt = require('bcryptjs')
const User = require('../models/User')

//register controller
const register = async(req,res)=>{
    const {username,email,number,password,subscribed} = req.body
    const hashedPassword = await bcrypt.hash(password,1)
    //todo check for unique username and then only insert
    try {
        const response = await User.create({
            username,
            email,
            number,
            password:hashedPassword,
            subscribed
        })
    
        return res.status(200).json({success:true,response})
    } catch (error) {
        return res.status(400).json(error)  
    }
}

module.exports = register