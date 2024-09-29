
// Importamos los módulos necesarios
const http = require('http');  // Módulo para crear el servidor HTTP
const fs = require('fs');      // Módulo para leer archivos del sistema

// Creamos el servidor
const server = http.createServer((req, res) => {
  // Manejamos las diferentes rutas
  if (req.url === '/') {
    // Si la ruta es '/', servimos el archivo HTML
    fs.readFile('index.html', (err, data) => {
      if (err) {
        // Si hay un error al leer el archivo, enviamos un error 500
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error interno del servidor');
      } else {
        // Si se lee correctamente, enviamos el contenido HTML
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (req.url === '/api/mensaje') {
    // Si la ruta es '/api/mensaje', enviamos un JSON con el mensaje
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ mensaje: '¡Hola desde el servidor :)!' }));
  } else {
    // Para cualquier otra ruta, enviamos un error 404
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - No encontrado');
  }
});

// Definimos el puerto en el que escuchará el servidor
const PORT = 3000;

// Iniciamos el servidor
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});