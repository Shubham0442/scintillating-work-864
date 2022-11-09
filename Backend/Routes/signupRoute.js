
const { Router } = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../Models/userModel");

const userRouter = Router();

userRouter.post("/", async(req, res)=>{
     
     const { firstname, surname , dob, email, password, role } = req.body
      
     bcrypt.hash(password, 8, async function(err, hash) {
         
         if(err)
         {
            console.log(err)
            res.status(401).send({"msg":"something went wrong please signup again"})
         }
         else
         { 
            if(role === "admin")
            {
                const newUser = new User({
                    firstname, 
                    surname,
                    dob,
                    email,
                    password: hash,
                    role: req.body.role
                  })
    
                  await newUser.save();
                  res.status(201).send({"msg":"Sigup Successful"})
            }
            else{
                const newUser = new User({
                    firstname, 
                    surname,
                    dob,
                    email,
                    password: hash
                  })
    
                  await newUser.save();
                  res.status(201).send({"msg":"User Sigup Successful"})
            }
              
         }
    });

})

module.exports = { userRouter }