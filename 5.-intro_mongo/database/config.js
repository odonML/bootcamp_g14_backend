const mongoose = require("mongoose");
require('dotenv').config();

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

const dbConection = async () => {
    try {
        await mongoose.connect(URL)
        console.log("DB CONECT");
    } catch (err) {
        console.log("error in conection db");
    }
};

module.exports = {
    dbConection
}