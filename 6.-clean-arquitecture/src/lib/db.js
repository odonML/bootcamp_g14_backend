const mongoose = require("mongoose");
require('dotenv').config();

const dbConection = ({DB_USER, DB_PASSWORD, DB_HOST, DB_NAME}) => {
    const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;
    return mongoose.connect(URL)
};

module.exports = {
    dbConection
}