const express = require('express')
const cors = require('cors');
require('dotenv').config();
const koderRoute = require('./routes/koder.routes');
const {dbConection} = require("./database/config");

const app = express();

app.use(cors());
app.use(express.json());

dbConection();

app.use('/koders', koderRoute);

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log("server run in port ", PORT)
})
