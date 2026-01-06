const express = require('express');
const app = express();


app.use(express.json());


let animals = [
    { id: 1, name: 'Leon', species: 'Felino' },
    { id: 2, name: 'Elefante', species: 'Mamifero' },
];


const requestLogger = (req, res, next) => {
    console.log(`Solicitud: ${req.method} ${req.url}`);
};

app.use(requestLogger);

//Middleware para validar datos en solicitudes POST Y PUT
const validateAnimal = (req, res, next) => {
    const { name, species } = req.body;
    if (!name || !species) {
        return res.status(400).json({ error: 'Los campos name y species son requeridos' });
    }
    next();
};

//Rutas

//GEt
app.get('/api/animals', (req, res) => {
    res.status(200).json(animals);  //Devolver el array de animales
});

//POST: para agregar un nuevo animal
app.post('/api/animals', validateAnimal, (req, res) => {
    const { name, species } = req.body;
    const newAnimal = { id: animals.length + 1, name, species };
    animals.push(newAnimal);
    res.status(201).json(newAnimal);
});

//PUT: para actualizar un animal existente
app.put('/api/animals/:id', validateAnimal, (req, res) => {
    const { id } = req.params;
    const { name, species } = req.body;
    const animal = animals.find(a => a.id === parseInt(id));
    if (!animal) {
        return res.status(404).json({ error: 'Animal no encontrado' });
    }
    animal.name = name;
    animal.species = species;
    res.status(200).json(animal);
});

//DELETE: para eliminar un animal
app.delete('/api/animals/:id', (req, res) => {
    const { id } = req.params;
    animals = animals.filter(a => a.id !== parseInt(id));
    res.status(204).send();
});

//Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
    
});

