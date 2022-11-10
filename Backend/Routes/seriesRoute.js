const { Router } = require("express");
const { Authenticate } = require("../Middlewares/Authenticate");
const { Authorise } = require("../Middlewares/Authorise");
const { Series } = require("../Models/seriesModel");

const seriesRouter = Router();


seriesRouter.get("/read", async(req, res)=>{

       const allSeries = await Series.find();
        
       console.log(allSeries);

       res.send({"allSeries": allSeries})

})


seriesRouter.post("/create", Authenticate, Authorise(["admin"]), async(req, res)=>{

       const { userId } = req.body
       
       const payload = {...req.body, userId }; 
       const newSeies = new Series(payload)
       
       await newSeies.save()
       
       res.send({"msg": "Series added successfully", payload: newSeies}) 
       
       
})

seriesRouter.post("/update/:seriesId", Authenticate, Authorise(["admin"]), async(req, res)=>{

       const { userId } = req.body
       const { seriesId } = req.params
       
        
       const updatedSeries =  Series.findByIdAndUpdate({ _id: seriesId}, { ...req.body})
       
       console.log(updatedSeries)
       res.send({"msg": "Series Updated successfully"}) 
       
       
})



module.exports = { seriesRouter }