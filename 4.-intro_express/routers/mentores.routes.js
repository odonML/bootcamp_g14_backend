const express = require("express");
const mentorFile = require("../helper/koder.helper")
const router = express.Router();

router.get("/", async (req, res) => {
    const data = await mentorFile.loadFile("mentores");
    res.json(data);
});
router.post("/", async (req, res) => {
    const mentores= await mentorFile.loadFile("mentores");
    const newMentor = req.body;

    if (!mentorFile.isValidUser(newMentor)) {
        res.statusCode = 400;
        res.end("objeto no valido");
        return;
    }
    mentores.push(newMentor);
    await mentorFile.saveMentor(mentores);
    res.status(201).json(newMentor);
});

router.patch("/:name", async (req, res) => {
    const mentores = await mentorFile.loadFile("mentores");
    const newDataOfMentor = req.body;
    const mantorName = req.params.name;
    if (!mentorFile.isValidUser(newDataOfMentor)) {
        res.statusCode = 400;
        res.end("objeto no valido");
        return;
    }
    const mentorIndex = await mentorFile.userFindIndex(mentores, mantorName);
    if (mentorIndex === -1) {
        res.statusCode = 400;
        res.end("Mentor no encontrado");
        return;
    }
    mentores[mentorIndex].nombre = newDataOfMentor.nombre;
    mentores[mentorIndex].genero = newDataOfMentor.genero;
    await mentorFile.saveMentor(mentores);
    res.json(newDataOfMentor);
});

router.get("/:name", async (req, res) => {
    const mentores = await mentorFile.loadFile("mentores");
    const mentorName = req.params.name;
    const mentorIndex = await mentorFile.userFindIndex(mentores, mentorName);
    if (mentorIndex === -1) {
        res.statusCode = 400;
        res.end("Mentor no encontrado");
        return;
    }
    res.json(mentores[mentorIndex]);
});

router.delete("/:name", async (req, res) => {
    const mentores = await mentorFile.loadFile("mentores");
    const mentorName = req.params.name;
    const mentorIndex = await mentorFile.userFindIndex(mentores, mentorName);
    if (mentorIndex === -1) {
        res.statusCode = 400;
        res.end("Mentor no encontrado");
        return;
    }
    mentores.splice(mentorIndex, 1)
    await mentorFile.saveMentor(mentores);
    res.end("Mentor eliminado");
});

module.exports = router;