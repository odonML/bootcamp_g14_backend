const fs = require('fs/promises');
// Folder
async function crearFolder(folder){
    try{
        await fs.mkdir(folder);
        console.log("folder creado");
    }catch(err){
        console.log(err);
    }
}
async function leerFolder(folder){
    try{
        const dataFolder = await fs.readdir(folder);
        console.log("--archivos del folder:", dataFolder);
    }catch(err){
        console.log(err)
    }
}
async function eliminarFolder(folder){
    try{
        await fs.rmdir(folder);
        console.log("folder eliminando");
    }catch(err){
        console.log(err);
    }
}

// CRUD File

async function crearArchivo(nombre, contenido) {
    try{
        await fs.writeFile(nombre, contenido, 'utf8');
        console.log(`se creo el archivo ${nombre}`);
    }catch(error){
        console.log(error);
    }
}

async function leerArchivo(file){
    try{
        const dataFile = await fs.readFile(file,'utf8')
        console.log(dataFile)
    }catch(err){
        console.log(err)
    }
}

async function editarArchivo(file, data){
    try{
        await fs.appendFile(file, data, 'utf8');
    }catch(err){
        console.log(err);
    }
}

async function eliminarArchivo(file){
    try{
        await fs.unlink(file);
        console.log("archivo eliminado")
    }catch(err){
        console.log(err);
    }
}


async function fileCrud(folder){
    await crearFolder(folder)
    await crearArchivo(`${folder}/file`, "hola");
    await leerArchivo(`${folder}/file`);
    await editarArchivo(`${folder}/file`, "mundo2");
    await leerArchivo(`${folder}/file`);
    await leerFolder(folder);
    await eliminarArchivo(`${folder}/file`);
    await eliminarFolder(folder);
}

fileCrud('carpeta1');