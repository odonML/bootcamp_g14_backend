const express = require("express");
const {getKoderByGender, postKoder} = require("../controller/koder.controller")
const router = express.Router();

router.get("/", getKoderByGender);
router.post("/", postKoder);

module.exports=router;