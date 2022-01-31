const express = require("express");
const {conGetAllKoders, conPostKoder, conDeleteKoder} = require("../controllers/koder.controller")
const routes = express.Router();

routes.get("/", conGetAllKoders);
routes.post("/", conPostKoder);
routes.delete("/:id", conDeleteKoder);


module.exports = routes;