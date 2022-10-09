//imports
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


//login controller
const login = async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await User.findOne({ username }).lean()
        if (user) {
            const isPasswordMatch = await bcrypt.compare(password, user.password)
            if (isPasswordMatch) {
                const accessToken = jwt.sign({id:user._id},process.env.JWT_SECRET)
                return res.status(200).json({
                    success: true,
                    token:accessToken,
                    message: "Logged In Successfully"
                })
                
            } else {
                return res.status(400).json({
                    success: false,
                    message: "Wrong email/password"
                })
            }
        } else {
            return res.status(400).json({
                success: false,
                message: "Wrong email/password"
            })
        }
    } catch (error) {
        return res.status(400).json(error)    
    }
}

module.exports = login