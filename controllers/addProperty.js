//Imports
const Property = require('../models/Property')
const User = require('../models/User')


//addProperty controller
const addProperty = async(req,res)=>{
    //Todo check  if currentuser email and email in ownmer data matches
    // Or just make the owner fields not editable and prepopulated in the frontend.so always we will get same email
    const{owner,title,address,location,locality,noBHK,type} = req.body
    try {
        const user = await User.findOne({"username":owner.name})
        console.log(user.length);
        if(user){
            
            const response = await Property.create({
                owner,
                title,
                address,
                location,
                locality,
                noBHK,
                type
            })
            return res.status(200).json({success:true,response})
        }else{
            return res.status(400).json({success:false,message:"You can only post the properties you own."})
        }
    } catch (error) {
        return res.status(400).json({success:false,error})  
    }
}

module.exports = addProperty