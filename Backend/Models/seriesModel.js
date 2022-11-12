
const mongoose = require("mongoose");

const seriesSchema = mongoose.Schema({
     userId: { type: String, required: true},
     name: { type: String, required: true},
     cover: { type: String, required: true},
     poster: { type: String, required: true},
     description: { type: String, required: true},
     director: { type: String, required: true},
     seriesType: { type: String, required: true},
     releaseYear: { type: String, required: true},
     duration: { type: String, required: true},
     videoLink: { type: String, required: true},
     nameImg: { type: String}
}) 


const Series = mongoose.model("series", seriesSchema);


module.exports = { Series }


