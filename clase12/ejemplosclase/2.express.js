
const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('¡Hola chicas de ADA! bienvenidas al servidor con Express');

});

app.listen(PORT, () => {
    console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
});