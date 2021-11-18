// controllers/usuarios.js
const db = require('../models')

exports.getAllFacturas = async (req, res, next) => {
  const allFacturas = await db.Facturas.findAll({
    attributes: ['id', 'fechaFactura', 'monto','createdAt','updatedAt'],
  })
  res.status(200).send(allFacturas)
}
