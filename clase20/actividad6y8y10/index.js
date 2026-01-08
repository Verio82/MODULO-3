const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config(); // CARGA EL .env

const app = express();

// Variables de entorno
const PORT = process.env.PORT || 3000;
const SECRET_KEY = process.env.SECRET_KEY;

app.use(express.json());


// LOGIN

app.post("/login", (req, res) => {
  const { usuario, clave } = req.body;

  if (usuario === "admin" && clave === "1234") {
    const token = jwt.sign(
      { usuario },
      SECRET_KEY, // 👈 ahora viene del .env
      { expiresIn: "1h" }
    );

    return res.json({
      message: "Login exitoso",
      token
    });
  }

  res.status(401).json({ message: "Credenciales incorrectas" });
});


// MIDDLEWARE JWT

const verificarToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ message: "Token no enviado" });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Token inválido o expirado" });
    }

    req.usuario = decoded.usuario;
    next();
  });
};

// RUTA PROTEGIDA

app.get("/perfil", verificarToken, (req, res) => {
  res.json({
    message: "Acceso autorizado",
    usuario: req.usuario
  });
});

//console.log("SECRET_KEY:", SECRET_KEY);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});