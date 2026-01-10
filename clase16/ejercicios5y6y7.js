const express = require('express');
const { z } = require('zod');

const app = express();
app.use(express.json());


   //USUARIOS 

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

//PRODUCTOS 
// Esquema Zod para productos

const productSchema = z.object({
  id: z.number(),
  name: z.string()
});

// Arreglo de productos
const products = [];

// Endpoint POST con validación
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

//EJERCICIO 7 - TAREAS
// Esquema Zod para tareas
const taskSchema = z.object({
  title: z.string(),
  completed: z.boolean().default(false)
});

// Arreglo temporal de tareas
const tasks = [];

// Endpoint POST con validación
app.post('/tasks', (req, res) => {
  const result = taskSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      message: 'Datos inválidos',
      errors: result.error.errors
    });
  }

  tasks.push(result.data);

  res.status(201).json({
    message: 'Tarea agregada correctamente',
    task: result.data
  });
});

// Iniciar el servidor

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});