const express = require("express");
const koderFile = require("../helper/koder.helper")
const router = express.Router();

router.get("/", async (req, res) => {
    const data = await koderFile.loadFile("koders");
    res.json(data);
});
router.post("/", async (req, res) => {
    const koders= await koderFile.loadFile("koders");
    const newKoder = req.body;

    if (!koderFile.isValidUser(newKoder)) {
        res.statusCode = 400;
        res.end("objeto no valido");
        return;
    }
    koders.push(newKoder);
    await koderFile.saveKoder(koders);
    res.statusCode(201).json(newKoder);
});

router.patch("/:name", async (req, res) => {
    const koders = await koderFile.loadFile("koders");
    const newDataOfKoder = req.body;
    const koderName = req.params.name;
    if (!koderFile.isValidUser(newDataOfKoder)) {
        res.statusCode = 400;
        res.end("objeto no valido");
        return;
    }
    const koderIndex = await koderFile.userFindIndex(koders, koderName);
    if (koderIndex === -1) {
        res.statusCode = 400;
        res.end("Koder no encontrado");
        return;
    }
    koders[koderIndex].nombre = newDataOfKoder.nombre;
    koders[koderIndex].genero = newDataOfKoder.genero;
    await koderFile.saveKoder(koders);
    res.json(newDataOfKoder);
});

router.get("/:name", async (req, res) => {
    const koders = await koderFile.loadFile("koders");
    const koderName = req.params.name;
    const koderIndex = await koderFile.userFindIndex(koders, koderName);
    if (koderIndex === -1) {
        res.statusCode = 400;
        res.end("Koder no encontrado");
        return;
    }
    res.json(koders[koderIndex]);
});

router.delete("/:name", async (req, res) => {
    const koders = await koderFile.loadFile("koders");
    const koderName = req.params.name;
    const koderIndex = await koderFile.userFindIndex(koders, koderName);
    if (koderIndex === -1) {
        res.statusCode = 400;
        res.end("Koder no encontrado");
        return;
    }
    koders.splice(koderIndex, 1)
    await koderFile.saveKoder(koders);
    res.end("Koder eliminado");
});

module.exports = router;