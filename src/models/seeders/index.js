// seeders/index.js
const db = require('../index')
const chance = require('chance').Chance()
const faker = require('faker')

const createSeeds = async () => {
  const consultasCount = 50

  chance.mixin({
    consulta: function () {
      return {
	nombre: chance.name(),
	motivo: chance.paragraph(),
        fechaDeConsulta: chance.date(),
        createdAt: chance.date(),
        updatedAt: chance.date()
      }
    },
  })
  for (let index = 0; index < consultasCount; index++) {
    const consulta = await db.Consultas.create(chance.consulta())
  }
  for (let index = 0; index < consultasCount; index++) {
    const consulta = await db.Consultas.create({
      nombre: faker.name.findName(),
      motivo: faker.lorem.sentence(),
      fechaDeConsulta: faker.date.recent(10),
      createdAt: faker.date.recent(2),
      updatedAt: faker.date.recent(2)
    })
  }
}

module.exports = createSeeds
