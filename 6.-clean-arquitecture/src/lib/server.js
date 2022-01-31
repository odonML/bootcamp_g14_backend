const express = require("express");
const routesKoder = require("../routes/koder.routes");
const app = express();

app.use(express.json())

app.use("/koders", routesKoder)

module.exports = {app};