// controllers/usuarios.js
const db = require('../models')

exports.getAllUsuarios = async (req, res, next) => {
  const allUsuarios = await db.Usuarios.findAll({
    attributes: ['id', 'correo', 'clave','createdAt','updatedAt'],
  })
  res.status(200).send(allUsuarios)
}
