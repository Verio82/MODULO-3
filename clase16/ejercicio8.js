// Importar las dependencias necesarias
const express = require('express');
const cors = require('cors');

// Crear la aplicación de Express
const app = express();

//Permitir solicitudes desde cualquier origen
app.use(cors());

//GET
app.get('/data', (req, res) => {
  res.json({
    message: 'Hola desde el servidor',
    status: 'ok'
  });
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});