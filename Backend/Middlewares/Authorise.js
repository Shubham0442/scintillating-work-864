const { User } = require("../Models/userModel");

const Authorise =(permittedRole)=>{
  
    return  async(req, res, next)=>{
     
     const { userId } = req.body;
     //console.log(userId)
     const user = await User.findOne({ _id: userId });
     const role = user.role;
     //console.log(user)

     if(permittedRole.includes(role))
     {   
         req.body.userId = userId
         next();
     }
     else{
         res.send({ "msg": "Not Authorised"})
     }
     
 }
}

module.exports = { Authorise }