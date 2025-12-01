// Crea un servidor que: 1. Devuelva un mensaje de bienvenida (¡Bienvenida al servidor de Express!) al acceder a la ruta raíz /. 2. Devuelva un error 404 (Ruta no encontrada) para cualquier ruta que no esté definida.

const express = require("express");
const app = express();

// Middleware para interpretar JSON (aunque en este ejercicio no es obligatorio)
app.use(express.json());

// 1. Ruta raíz → mensaje de bienvenida
app.get("/", (req, res) => {
  res.send("¡Bienvenida al servidor de Express!");
});

// 2. Manejar rutas no definidas → error 404
app.use((req, res) => {
  res.status(404).send("Ruta no encontrada");
});

// Levantar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});