const fs = require("fs/promises");

const FILE = "data.json";
const ENCODING = "utf8";

const  isValidUser = (user) => {
    return user.nombre && user.genero;
}

const userFindIndex = (users, name) => {
    return users.findIndex((user) => user.nombre === name);
}

const loadFile = async (data) => {
    try {
        const dataFile = await fs.readFile(FILE, ENCODING);
        const parseFile = JSON.parse(dataFile);
        return parseFile[data];
    } catch (err) {
        console.log(err);
        return [];
    }
}

const saveKoder = async (koders) => {
    try {
        const mentores = await loadFile("mentores");
        const newObject = {koders, mentores}; // creamos un nuevo objeto
        const newContent = JSON.stringify(newObject, null, 4); // para mantener formato de JSON

        await fs.writeFile(FILE,  newContent, ENCODING);
    } catch (err) {
        console.error("no se pudieron guardar los Koders", err);
    }
}
const saveMentor = async (mentores) => {
    try {
        const koders = await loadFile("koders");
        const newObject = {mentores, koders}; // creamos un nuevo objeto
        const newContent = JSON.stringify(newObject, null, 4); // para mantener formato de JSON

        await fs.writeFile(FILE,  newContent, ENCODING);
    } catch (err) {
        console.error("no se pudieron guardar los Mentores", err);
    }
}


const userFile = {
    isValidUser,
    userFindIndex,
    loadFile,
    saveKoder,
    saveMentor,
}

module.exports = userFile;