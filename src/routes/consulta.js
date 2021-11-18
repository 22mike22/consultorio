//routes/usuarios.js
const express = require('express')
const router = express.Router()

const consultasController = require('../controllers/consultas')

router.get('/', usuariosController.getAllConsultas)

module.exports = router

