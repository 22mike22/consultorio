require('dotenv').config()

const express = require('express')
const logger = require('morgan')
const db = require('./models')
const createSeeds = require('./models/seeders')

const app = express()
const PORT = process.env.PORT

app.use(logger('dev'))

app.use(express.json()) //http://expressjs.com/en/api.html#express.json
app.use(express.urlencoded({ extended: false })) //http://expressjs.com/en/5x/api.html#express.urlencoded

const usuarioRouter = require('./routes/usuarios')

app.use('/usuarios', usuarioRouter)
const seed = process.argv[2]
if (seed) {
  db.sequelize
    .sync({ force: true })
    .then(() => {
      createSeeds()
    })

    .catch((err) => {
      console.error(err)
    })
} else {
  db.sequelize
    .sync()
    .then(() => {
      app.listen(PORT, () => {
        console.info(`App listening on port ${PORT}`)
      })
    })
    .catch((err) => {
      console.error(err)
    })
}
const facturaRouter = require('./routes/facturas')

app.use('/facturas', facturaRouter)
const seedFacturas = process.argv[2]
if (seedFacturas) {
  db.sequelize
    .sync({ force: true })
    .then(() => {
      createSeeds()
    })

    .catch((err) => {
      console.error(err)
    })
} /*else {  Marca error porque ya escucha este puerto
  db.sequelize
    .sync()
    .then(() => {
      app.listen(PORT, () => {
        console.info(`App listening on port ${PORT}`)
      })
    })
    .catch((err) => {
      console.error(err)
    })
}*/

const consultaRouter = require('./routes/consultas')
app.use('/consultas', consultaRouter)
const seedConsultas = process.argv[2]
if (seedConsultas) {
  db.sequelize
    .sync({ force: true })
    .then(() => {
      createSeeds()
    })

    .catch((err) => {
      console.error(err)
    })
}

const medicamentoRouter = require('./routes/medicamentos')
app.use('/medicamentos', medicamentoRouter)
const seedMedicamentos = process.argv[2]
if (seedMedicamentos) {
  db.sequelize
    .sync({ force: true })
    .then(() => {
      createSeeds()
    })

    .catch((err) => {
      console.error(err)
    }) 
}

module.exports = app
