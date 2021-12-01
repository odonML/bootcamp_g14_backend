const koders = require("../models/koder.model");

const getKoderByGender = async (req, res) =>{
    const gender = req.query.gender;
    const filtro = {};
    if(gender) filtro.gender = gender;
    const allKodersByGender = await koders.find(filtro);
    res.json(allKodersByGender);
}
const postKoder = async (req, res)=>{
    const koder = req.body;
    await koders.create(koder);
    res.json(koder);
}
module.exports={
    getKoderByGender,
    postKoder,
}