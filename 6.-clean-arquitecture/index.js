require("dotenv").config();
const { dbConection } = require("./src/lib/db");
const { app } = require("./src/lib/server");

dbConection(process.env)
    .then(() => {
        console.log("db conect");
        app.listen(process.env.PORT, () => {
            console.log("server ronnig");
        });
    })
    .catch((err) => console.log(err));
