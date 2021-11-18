// controllers/usuarios.js
const db = require('../models')

exports.getAllConsultas = async (req, res, next) => {
  const allConsultas = await db.Consultas.findAll({
    attributes: ['id', 'nombre', 'motivoDeConsulta', 'fechaDeConsulta','createdAt','updatedAt'],
  })
  res.status(200).send(allConsultas)
}
