const http = require('http');   // http es un módulo presente por defecto en Node (no requere dependencias de NPM)
const port = 3000

const server =
    http.createServer((req, res) => {   // createServer() recibe una función como arguimento con los parámetros request y response
        if (req.url === '/') {          // El objeto request contiene iunformación sobre la solicitud hecha por el cliente
            res.statusCode = 200        // innecesario
            res.write('La URL solicitada es ' + req.url);   // El objeto response dispone de métodos y propiedades para gestionar la respuesta por parte del servidor
            res.end();
        } else if (req.url === '/productos') {
            res.statusCode = 200        // innecesario
            res.write('Nuestros productos están de vicio');
            res.end();
        } else {
            res.statusCode = 404
            res.write('La URL no existe, te devuelvo un 404');
            res.end();
        }
    });

server.listen(port, () => console.log('Servidor escuchando en el puerto 3000'));