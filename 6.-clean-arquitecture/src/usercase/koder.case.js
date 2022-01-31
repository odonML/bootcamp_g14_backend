const Koder = require("../models/koder.model");

async function caseGetAllKoders(){
    const allKoder = await Koder.find({});
    return allKoder;
}

async function casePostKoder(data){
    const newKoder = new Koder(data);
    await newKoder.save();
    return newKoder;
}

async function caseDeleteKoder(id){
    await Koder.findOneAndDelete({_id:id});
    console.log("este es el id",id)
}

module.exports = {
    caseGetAllKoders,
    casePostKoder,
    caseDeleteKoder,
}