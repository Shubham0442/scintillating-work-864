
const mongoose = require("mongoose"); 

const castSchema = mongoose.Schema({
    userId: { type: String, required: true},
    seriesId: { type: String, required: true},
    seriesName: { type: String, required: true},
    Avatar : { type: String, required: true},
    name: { type: String, required: true},
    nameInSeries: { type: String, required: true}
})

const Cast = mongoose.model("cast", castSchema )

module.exports = { Cast }