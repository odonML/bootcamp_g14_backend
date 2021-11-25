const http = require("http");
const port = 8080;

const servidor = http.createServer((req, res) => {
    const metodo = req.method;
    const url = req.url;
    const validURL = url === "/koder";
    res.statusCode = 200;
    res.setHeader('content-type', 'text/json');
     
    if(metodo === "GET" && validURL ){
        res.write('{"text": "aqui estan todos los koders"}');
    }else if(metodo === "POST" && validURL){
        res.write('{"text": "aqui puedes crear koders"}');
    }else if(url !== "/koder"){
        res.write('{"text": "URL no valida"}')
    }else{
        res.write('{"text": "peticion no valida"}')
    }
    
    res.end()
})

servidor.listen(port, ()=>{
    console.log(`server run in port ${port}`);
})