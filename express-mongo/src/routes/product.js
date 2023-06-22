const express = require('express');
const productSchema = require('../models/product');

const router = express.Router();

// Crear un usuario
router.post('/products', (req, res) => {
    const product = productSchema(req.body)
    product.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

//Obtener usuario
router.get('/products', (req, res) => (
    productSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message : error}))
))

//Obtener usuario por ID
router.get('/products/:id', (req, res) => {
    const { id } = req.params
    productSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message : error}))
})

// Actualizar
router.put('/products/:id', (req, res) => {
    const { id } = req.params
    const { product, price, description } = req.body
    productSchema.updateOne( { _id : id }, { $set: { product, price, description } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message : error}))
})

// Eliminar
router.delete('/products/:id', (req, res) => {
    const { id } = req.params
    productSchema.deleteOne( { _id : id } )
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error}))
})

module.exports = router;