const express = require('express');
const { z } = require('zod');

const app = express();
app.use(express.json());

/* =====================
   USUARIOS (YA HECHO)
===================== */

const userSchema = z.object({
  id: z.number(),
  name: z.string()
});

const users = [];

app.post('/users', (req, res) => {
  const result = userSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      message: 'Datos inválidos',
      errors: result.error.errors
    });
  }

  users.push(result.data);

  res.status(201).json({
    message: 'Usuario agregado correctamente',
    user: result.data
  });
});

/* =====================
   PRODUCTOS (NUEVO)
===================== */

// 1️⃣ Esquema Zod para productos
const productSchema = z.object({
  id: z.number(),
  name: z.string()
});

// 2️⃣ Arreglo de productos
const products = [];

// 3️⃣ Endpoint POST con validación
app.post('/products', (req, res) => {
  const result = productSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      message: 'Datos inválidos',
      errors: result.error.errors
    });
  }

  products.push(result.data);

  res.status(201).json({
    message: 'Producto agregado correctamente',
    product: result.data
  });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});