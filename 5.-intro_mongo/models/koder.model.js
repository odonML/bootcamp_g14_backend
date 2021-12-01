const {Schema, model} = require("mongoose");

const koderSchema = new Schema({
    name: String,
    lastName: String,
    gender: String,
    age: Number,
})

const Koders = model("Koder", koderSchema);

module.exports = Koders;