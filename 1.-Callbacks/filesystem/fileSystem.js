const fs = require('fs');

function crearArchivo(nombre, contenido) {
    fs.writeFile(nombre, contenido, 'utf8', (error) => {
        if (error) { // {error: 'Todo salio mal'} | false | undefined
            console.error("error")
        } else {
            console.log('Se creo el archivo correctamente');
        }
    });
}

function leerArchivo(file){
    fs.readFile(file,'utf8', (err, data) =>{
        if(err) console.log("error");
        console.log(data)
    })
}

function eliminarArchivo(file){
    fs.unlink(file, (err) => {
        if (err) console.log("error");
        console.log('path/file.txt was deleted');
      });
}

function editarArchivo(file, data){
    fs.appendFile(file, data, 'utf8', (err)=>{
        if(err) console.log("error");
        leerArchivo(file);
    })
}
// crearArchivo("hola", "mundo");
// leerArchivo("hola");
// eliminarArchivo("hola");
editarArchivo("hola", "compas");