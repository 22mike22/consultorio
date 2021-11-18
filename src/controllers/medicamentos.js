// controllers/usuarios.js
const db = require('../models')

exports.getAllMedicamentos = async (req, res, next) => {
  const allMedicamentos = await db.Medicamento.findAll({
    attributes: ['id', 'nombreDelMedicamento', 'cantidad', 'fechaDeExpedicion', 'createdAt','updatedAt'],
  })
  res.status(200).send(allMedicamentos)
}
