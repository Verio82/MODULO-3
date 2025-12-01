//Importar el módulo HTTP de Node.js

const http = require('http');

//creamos un servidor usando createServer
//Esta funcion toma como callback dos parametros 
const server = http.createServer((req, res) => {
//Establecemos el estado de la respuesta a 200 (OK), indicado que la solicitud fue exitosa
    res.statusCode = 200;
//Configuramos la cabecera de la respuesta para indicar que el contenido es de tipo texto plano
    res.setHeader('Content-Type', 'text/plain');
//Enviar la respuesta al cliente con el mensaje "¡Hola, mundo!" y finalizando la respuesta
    res.end('¡Hola, mundo!');;
});

server.listen(3000, () => {
    console.log("Servidor ejecutandose en http://localhost:3000");
});