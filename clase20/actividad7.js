const express = require("express");
const { z } = require("zod");

const app = express();
app.use(express.json());

// Esquema de validación
const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres")
});

// Endpoint login
app.post("/login", (req, res) => {
  const result = loginSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      message: "Datos inválidos",
      errors: result.error.errors
    });
  }

  // Simulación de autenticación
  res.json({
    message: "Usuario autenticado",
    user: {
      email: result.data.email
    }
  });
});

// Server
app.listen(3000, () => {
  console.log("🚀 Servidor levantado en puerto 3000");
});