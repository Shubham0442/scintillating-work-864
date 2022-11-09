
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstname: { type: String, required: true},
    surname: { type: String, required: true},
    dob: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    role:  { type: String, enum:[ "user", "admin"], default: "user", required: true }
})


const User = mongoose.model("user", userSchema)


module.exports = { User }