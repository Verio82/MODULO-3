const fs = require('fs');
const path = require('path');
const express = require('express');
const { ifError } = require('assert/strict');

const PORT = 3000;
const app = express();
//Inicializamos
app.use(express.json());

//Ruta para leer el JSON
const filePath = path.join(__dirname, 'database.json');

//Funcion para leer el archivo JSON
const readJSONFile = () => {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
};

//Endpoint GET
app.get('/users', (req, res) => {
    const users = readJSONFile();
    res.status(200).json(users);
});

//Endpoint POST
app.post('/users', (req, res) => {
    const { id, name } =req.body;

    if (!id || !name) {
    return res.status(400).json({ error: 'Faltan datos obligatorios: id y name' });
};

const users = readJSONFile();
const newUser = { id, name };
users.push(newUser);
fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
res.status(201).json({ message: 'Usuario agregado correctamente', newUser});

});

//Endpoint DELETE eliminamos un usuario por ID
app.delete('/users/:id', (req, res) => {
    const { id } =req.params;

    const users = readJSONFile();

    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
    } else {
        users.splice(userIndex, 1);
        fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
        res.status(200).json({ message: 'Usuario eliminado correctamente' });
    }
});

//Endpoint PATCH actualizamos un usuario por ID
app.patch('/users/:id', (req, res) => {
    const { id } =req.params;
    const { name } =req.body;

    if (!name) {
        return res.status(400).json({ error: 'Falta el dato obligatorio: nombre' });
    };

    const users = readJSONFile();

    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
    } else {
        user.name = name;
        fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
        res.status(200).json({ message: 'Usuario actualizado correctamente', user });
    }
});

//Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

