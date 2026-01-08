require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const SECRET_KEY = process.env.SECRET_KEY;


   //LOGIN

app.post("/login", (req, res) => {
  const { user, password } = req.body;

  if (user === "admin" && password === "1234") {
    const token = jwt.sign(
      { user, rol: "admin" }, // 👈 rol incluido
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    return res.json({ token });
  }

  res.status(401).json({ message: "Credenciales inválidas" });
});


   //MIDDLEWARE ADMIN

const verificarAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Token no proporcionado" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);

    if (decoded.rol !== "admin") {
      return res.status(403).json({ message: "Acceso denegado: no es admin" });
    }

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token inválido" });
  }
};


  // RUTA PROTEGIDA

app.get("/admin", verificarAdmin, (req, res) => {
  res.json({
    message: "Bienvenido administrador",
    user: req.user
  });
});


   //SERVER

app.listen(process.env.PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${process.env.PORT}`);
});