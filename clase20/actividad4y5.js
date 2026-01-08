const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 3000;

// 🔑 clave secreta (en proyectos reales va en .env)
const SECRET_KEY = "mi_clave_secreta";

app.use(express.json());

// ✅ POST /login
app.post("/login", (req, res) => {
  const { usuario, clave } = req.body;

  // Validación simple
  if (usuario === "admin" && clave === "1234") {
    const token = jwt.sign(
      { usuario },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    return res.json({
      message: "Login exitoso",
      token
    });
  }

  res.status(401).json({ message: "Credenciales incorrectas" });
});

//Actividad 5

// Middleware para verificar el token

const verificarToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ message: "Token no enviado" });
  }

  // Formato esperado: "Bearer TOKEN"
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token inválido" });
  }

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

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});