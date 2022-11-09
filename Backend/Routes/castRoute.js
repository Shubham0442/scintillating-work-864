const { Router } = require("express");
const { Authenticate } = require("../Middlewares/Authenticate");
const { Authorise } = require("../Middlewares/Authorise");
const { Cast } = require("../Models/castModel");
const { Series } = require("../Models/seriesModel");

const castRouter = Router();

castRouter.post("/create/:seriesId", Authenticate, Authorise(["admin"]), async(req, res)=>{
    
    const { userId } = req.body
    const {seriesId} = req.params 
    
    const currentSeries = await Series.findOne({ _id: seriesId })
    const payload = {...req.body, userId,  seriesId, seriesName: currentSeries.name};
    
    //console.log(payload)
    const newCast = new Cast(payload);
    await newCast.save();
    res.send({"msg": "Cast added successfully"})
})


module.exports = { castRouter }