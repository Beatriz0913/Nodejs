const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    let alumnos = [
        {
            "Cuenta": "0101",
            "Nombre": "Beatriz",
            "Apellido": "Quijada",
            "Carrera": "Informatica",
        },
        {
            "Cuenta": "0202",
            "Nombre": "Adriana",
            "Apellido": "Chavarria",
            "Carrera": "Informatica",
        },
    ];
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/JSON');
  res.end(JSON.stringify(alumnos));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});