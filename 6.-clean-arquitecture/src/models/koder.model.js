const {Schema, model} = require("mongoose");

const koderSchema = new Schema({
    name: String,
    lastName: String,
    gender: String,
    age: Number,
})
koderSchema.method('toJSON', function(){
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
})

const Koders = model("Koder", koderSchema);

module.exports = Koders;