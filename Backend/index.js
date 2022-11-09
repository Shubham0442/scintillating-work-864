
const express = require("express");
const cors = require("cors"); 
const { connect } = require("./Config/db");
const { userRouter } = require("./Routes/signupRoute");
const { loginRouter } = require("./Routes/loginRoute");
const { seriesRouter } = require("./Routes/seriesRoute");
const { castRouter } = require("./Routes/castRoute");
require("dotenv").config();

const PORT = process.env.Port || 5251

const app = express();

app.use(express.json());
app.use(cors())
app.use("/signup", userRouter)
app.use("/login", loginRouter)
app.use("/series", seriesRouter)
app.use("/cast", castRouter)

app.listen( PORT, async()=>{
     
    try{

        await connect 
        console.log(`server is running on http://localhost:${PORT}`)
    }
    catch(error){
        console.log("error", error)
    }
})