//routes/usuarios.js
const express = require('express')
const router = express.Router()

const facturasController = require('../controllers/facturas')

router.get('/', facturasController.getAllFacturas)

module.exports = router

