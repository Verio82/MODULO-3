// Importar las dependencias necesarias
const express = require('express');
const cors = require('cors');

// Crear la aplicación de Express
const app = express();

// Configurar CORS para permitir solo solicitudes desde http://localhost:3000
app.use(
  cors({
    origin: 'http://localhost:3000'
  })
);

// Middleware de autenticación
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(403).json({
      message: 'No autorizado'
    });
  }

  next();
};

// Endpoint protegido
app.get('/message', authMiddleware, (req, res) => {
  res.json({
    message: 'Acceso autorizado desde localhost:3000'
  });
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});