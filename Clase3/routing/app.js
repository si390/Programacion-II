const http = require('http');
const autos = require('./cursos');

const servidor = http.createServer((req, res) => {
    const {method} = req;
    switch(method){
        case 'GET':
            return manejarSolicitudGET(req, res);
        default:
            console.log('El metodo usado no puede ser usado por el servidor' + method);
    }
});

function manejarSolicitudGET(req, res) {
    const path = req.url;
    if (path === '/'){
        res.statusCode = 200;
        res.end(JSON.stringify(autos.infoAutos));

    }else if(path === '/autos'){
        res.statusCode = 200;
        res.end("Hola");
    }
}


const PUERTO = 3000;

servidor.listen(PUERTO, () => {
    console.log('El servidor listening on port' + PUERTO);
});