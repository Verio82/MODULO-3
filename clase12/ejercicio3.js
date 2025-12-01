//En este ejercicio, vamos a permitir que el cliente busque información de un usuario por su ID. Crea un endpoint GET que reciba un parámetro dinámico :id en la URL (por ejemplo, /users/1). Usa req.params para capturar este valor y busca al usuario correspondiente en una lista. Si no se encuentra el usuario, responde con un error 404. 

const express = require('express');
const app = express();

app.use(express.json());

const users = [
    { id:1, name: 'Ada Lovelace', email: 'ada@example.com'},
    { id:2, name: 'Grace Hopper ', email: 'grace@example.com'}
];


app.get('/users/:id', (req, res) => {

    const { id } = req.params;

    const user = users.find(u => u.id === parseInt(id));
//Si el usuario no existe, devolvemos un error 404
    if (!user) {
        return res.status(404).send('Usuario no encontrado');
    }
//Si el usuario existe, devolvemos sus datos en formato JSON
    res.json(user);
});

//Inicializamos el servidor
app.listen(3000, () => {
    console.log(`Servidor ejecutandose en http://localhost:3000`);
});