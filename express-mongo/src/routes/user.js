const express = require('express');
const userSchema = require('../models/user');

const {getToken} = require('../utils/headers');
const {verifyToken, validateExpiration} = require('../utils/token.js');

const router = express.Router();

// Crear un usuario
router.post('/users', (req, res) => {
    const user = userSchema(req.body)
    user.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

//Obtener usuario
router.get('/users', (req, res) => {
    const token = getToken(req);
    const payload = verifyToken(token);
    validateExpiration(payload);
    userSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message : error}))
});

//Obtener usuario por ID
router.get('/users/:id', (req, res) => {
    const { id } = req.params
    userSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message : error}))
});

// Actualizar
router.put('/users/:id', (req, res) => {
    const { id } = req.params
    const { name, age, email } = req.body
    userSchema
        .updateOne( { _id : id }, { $set: { name, age, email } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error}))
});

// Eliminar
router.delete('/users/:id', (req, res) => {
    const token = getToken(req);
    const payload = verifyToken(token);
    validateExpiration(payload);
    const { id } = req.params
    userSchema
        .deleteOne( { _id : id } )
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error.message}))
});

module.exports = router;