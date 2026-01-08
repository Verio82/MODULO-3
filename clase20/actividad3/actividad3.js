const express = require("express");

//Agrego cors
const cors = require("cors");

const app = express();
const PORT = 3000;

//Habilito CORS
app.use(cors());

app.get("/productos", (req, res) => {
  res.json([
    { id: 1, nombre: "Mouse" },
    { id: 2, nombre: "Teclado" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});