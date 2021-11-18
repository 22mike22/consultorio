//routes/usuarios.js
const express = require('express')
const router = express.Router()

const usuariosController = require('../controllers/usuarios')

router.get('/', usuariosController.getAllUsuarios)

module.exports = router

