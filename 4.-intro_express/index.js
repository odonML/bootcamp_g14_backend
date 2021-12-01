const express = require("express");
const fs = require("fs/promises");
const koders = require('./routers/koder.routes')
const mentores = require('./routers/mentores.routes')

const app = express();
app.use(express.json());
const PORT = 8080;

app.use("/koders", koders);
app.use("/mentores", mentores);

app.listen(PORT, () => {
    console.log(`run server in port ${PORT}`);
});


