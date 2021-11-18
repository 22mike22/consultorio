//routes/usuarios.js
const express = require('express')
const router = express.Router()

const consultasController = require('../controllers/consultas')

router.get('/', consultasController.getAllConsultas)

module.exports = router

