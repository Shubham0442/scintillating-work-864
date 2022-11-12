const { Router } = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../Models/userModel");
require("dotenv").config();
const jwt = require('jsonwebtoken');
require("dotenv").config();

const loginRouter = Router();


loginRouter.post("/", async(req, res)=>{

    const { email, password } = req.body;
    
    const currentUser = await User.findOne({ email: email})


    bcrypt.compare(password, currentUser.password, function(err, result) {
         

        if(err){
            res.status(401).send({ msg: "please login again" });
        }
        if(result){

            const token = jwt.sign({ userId: currentUser._id, email: currentUser.email }, process.env.KEY);
            res.status(201).send({ msg: "Login Successfull", token: token });
        }
        else{
            res.send({ msg: "please login again" });
        }
         
    });
      
})

module.exports = { loginRouter }