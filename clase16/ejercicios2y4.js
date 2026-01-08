const fs = require('fs');
const path = require('path');
const express = require('express');

const PORT = 3000;
const app = express();
//Inicializamos
app.use(express.json());

let products = [
    { id: '1', name: 'Notebook' },
    { id: '2', name: 'Mouse' },
    { id: '3', name: 'Teclado' },
];

//Endpoint GET
app.get('/products', (req, res) => {
    res.status(200).json(products);
});

//Endpoint POST
app.post('/products', (req, res) => {
    const { id, name } =req.body;
    if (!id || !name) {
        return  res.status(400).json({ error: 'Faltan datos obligatorios: id y name' });
    }
    const newProduct = { id, name };
    products.push(newProduct);
    res.status(201).json({ message: 'Producto agregado correctamente', newProduct});
});

//Endpoint PATCH para actualizar el name de un producto por ID
app.patch('/products/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const product = products.find(prod => prod.id === id);

    if (!product) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }
    const updatedProduct = { ...product, name };
    products = products.map(prod => prod.id === id ? updatedProduct : prod);
    res.status(200).json({ message: 'Producto actualizado correctamente', updatedProduct });
});

//Endpoint DELETE para eliminar un producto por ID
app.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    const productIndex = products.findIndex(prod => prod.id === id);
    if (productIndex === -1) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }
    products.splice(productIndex, 1);
    res.status(200).json({ message: 'Producto eliminado correctamente' });
});
