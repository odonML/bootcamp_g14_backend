const express = require("express");
const fs = require("fs/promises");

const router = express.Router();

const FILE = "data.json";
const ENCODING = "utf8";

router.get("/", async (req, res) => {
    const data = await loadFile(FILE, ENCODING, "koders");
    res.json(data);
});
router.post("/", async (req, res) => {
    const koders = await loadFile(FILE, ENCODING, "koders");
    const newKoder = req.body;

    if (!isValidKoder(newKoder)) {
        res.statusCode = 400;
        res.end("objeto no valido");
        return;
    }
    res.statusCode = 201;
    koders.push(newKoder);
    await saveKoder(koders, FILE);
    res.json(newKoder);
});

router.patch("/:name", async (req, res) => {
    const koders = await loadFile(FILE, ENCODING, "koders");
    const newDataOfKoder = req.body;
    const koderName = req.params.name;

    if (!isValidKoder(newDataOfKoder)) {
        res.statusCode = 400;
        res.end("objeto no valido");
        return;
    }

    const koderIndex = await koderFindIndex(koders, koderName);

    if (koderIndex === -1) {
        res.statusCode = 400;
        res.end("Koder no encontrado");
        return;
    }

    koders[koderIndex].nombre = newDataOfKoder.nombre;
    koders[koderIndex].genero = newDataOfKoder.genero;

    await saveKoder(koders, FILE);
    res.json(newDataOfKoder);
});

router.get("/:name", async (req, res) => {
    const koders = await loadFile(FILE, ENCODING, "koders");
    const koderName = req.params.name;
    const koderIndex = await koderFindIndex(koders, koderName);

    if (koderIndex === -1) {
        res.statusCode = 400;
        res.end("Koder no encontrado");
        return;
    }

    res.json(koders[koderIndex]);
});

router.delete("/:name", async (req, res) => {
    const koders = await loadFile(FILE, ENCODING, "koders");
    console.log(koders)
    const koderName = req.params.name;
    const koderIndex = await koderFindIndex(koders, koderName);
    if (koderIndex === -1) {
        res.statusCode = 400;
        res.end("Koder no encontrado");
        return;
    }
    koders.splice(koderIndex, 1)
    await saveKoder(koders, FILE);
    res.end("Koder eliminado");
});


function isValidKoder(koder) {
    return koder.nombre && koder.genero;
}

function koderFindIndex(koders, name) {
    return koders.findIndex((koder) => koder.nombre === name);
}

async function loadFile(file, encoding, data) {
    try {
        const dataFile = await fs.readFile(file, encoding);
        const parseFile = JSON.parse(dataFile);
        return parseFile[data];
    } catch (err) {
        console.log(err);
        return [];
    }
}

async function saveKoder(koders, file) {
    try {
        const newObject = { koders }; // creamos un nuevo objeto
        const newContent = JSON.stringify(newObject, null, 4); // para mantener formato de JSON

        await fs.writeFile(file, newContent, ENCODING);
    } catch (err) {
        console.error("no se pudieron guardar los koders", err);
    }
}


module.exports = router;