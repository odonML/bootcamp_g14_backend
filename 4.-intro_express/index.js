const express = require("express");
const fs = require("fs/promises");

const app = express();
app.use(express.json());
const PORT = 8080;

app.use("/koders", require('./routers/koder.routes'))

// MENTORES
// app.get("/mentores", async (req, res) => {
//     const data = await loadFile(FILE, ENCODING, "mentores");
//     res.json(data);
// });

app.listen(PORT, () => {
    console.log(`run server in port ${PORT}`);
});


