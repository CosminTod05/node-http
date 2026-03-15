// Importamos el modulo de Node para HTTP
const http = require('http');

// Importamos nuestro objeto de datos
const data = require('./data');

// Configuramos nuestro servidor
const server = http.createServer((req, res) => {
    // Decimos que la respuesta sera un HTML en español
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    // Aqui va el documento HTML completo que enviamos al navegador
    res.end(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>${data.titulo}</title>
        </head>
        <body>
            <h1>${data.titulo}</h1>
            <h2>${data.subtitulo}</h2>
            <p>${data.descripcion}</p>
            <p>Creado por: ${data.autor}</p>
        </body>
        </html>
    `);
});

// El servidor escucha en el puerto 3000
server.listen(3000, () => {
    console.log('Servidor funcionando en http://localhost:3000');
});
