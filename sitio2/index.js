const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola desde el servidor 2!');
});

app.listen(80, () => {
  console.log("Servidor escuchando en http://localhost:80")
});