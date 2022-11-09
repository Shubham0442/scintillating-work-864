const { Router } = require("express");
const { Authenticate } = require("../Middlewares/Authenticate");
const { Authorise } = require("../Middlewares/Authorise");
const { Series } = require("../Models/seriesModel");

const seriesRouter = Router();



seriesRouter.post("/create", Authenticate, Authorise(["admin"]), async(req, res)=>{

       const { userId } = req.body
       
       const payload = {...req.body, userId }; 
       const newSeies = new Series(payload)
       
       await newSeies.save()
       
       res.send({"msg": "Series added successfully", payload: newSeies}) 
       
       
})

module.exports = { seriesRouter }