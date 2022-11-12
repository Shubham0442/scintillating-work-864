const { Router } = require("express");
const { Authenticate } = require("../Middlewares/Authenticate");
const { Authorise } = require("../Middlewares/Authorise");
const { Series } = require("../Models/seriesModel");

const seriesRouter = Router();


seriesRouter.get("/read", async(req, res)=>{

       const allSeries = await Series.find();
        
       //console.log(allSeries);

       res.send({"allSeries": allSeries})

}) 

seriesRouter.get("/read/:seriesId", async(req, res)=>{
      
       const { seriesId } = req.params
       const allSeries = await Series.findOne({_id: seriesId});
        
      // console.log(allSeries);

       res.send({"allSeries": allSeries})

})


seriesRouter.post("/create", Authenticate, Authorise(["admin"]), async(req, res)=>{

       const { userId } = req.body
       
       const payload = {...req.body, userId }; 
       const newSeies = new Series(payload)
       
       await newSeies.save()
       
       res.send({"msg": "Series added successfully", payload: newSeies}) 
       
       
})

seriesRouter.patch("/update/:seriesId", Authenticate, Authorise(["admin"]), async(req, res)=>{

       const { userId } = req.body
       const { seriesId } = req.params
       const updatedSeries = await  Series.findByIdAndUpdate({ _id: seriesId}, { ...req.body})
       
       //console.log(updatedSeries)
       res.send({"msg": "Series Updated successfully"}) 
       
       
})



module.exports = { seriesRouter }