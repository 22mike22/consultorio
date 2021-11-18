//routes/usuarios.js
const express = require('express')
const router = express.Router()

const medicamentosController = require('../controllers/medicamentos')

router.get('/', medicamentosController.getAllMedicamentos)

module.exports = router

