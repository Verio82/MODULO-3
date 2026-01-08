const express = require('express');
const app = express();
const { z } = require('zod');

app.use(express.json());

let usuario = [];

//Actividad 1
app.get('/saludo', (req, res) => {
    res.status(200).send('Hola, bienvenid@ a la API');
});

//Actividad 2
const userSchema = z.object({
    username: z.string().min(3, 'El nombre de usuario debe tener al menos 3 caracteres'),
    age: z.number().positive('La edad debe ser un número positivo'),
});

app.post('/usuarios', (req, res) => {
    try {
        const nuevoUsuario = userSchema.parse(req.body);
        usuario.push(nuevoUsuario);
        res.status(201).json({ message: 'Usuario creado exitosamente', user: nuevoUsuario });
    } catch (error) {
        res.status(400).json({ error: error.issues.map(e => e.message) });
    }
});





app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});


