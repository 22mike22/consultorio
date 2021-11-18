// seeders/index.js
const db = require('../index')
const chance = require('chance').Chance()
const faker = require('faker')

const createSeeds = async () => {
  const medicamentosCount = 50

  chance.mixin({
    medicamento: function () {
      return {
	nombreDelMedicamento: chance.sentence(),
	cantidad: chance.integer({min:0,max:10}),
        fechaDeExpedicion: chance.date(),
        createdAt: chance.date(),
        updatedAt: chance.date()
      }
    },
  })
  for (let index = 0; index < medicamentosCount; index++) {
    const medicamento = await db.Medicamento.create(chance.medicamento())
  }
  for (let index = 0; index < medicamentosCount; index++) {
    const medicamento = await db.Medicamento.create({
      nombreDelMedicamento: faker.lorem.sentence(),
      cantidad: faker.datatype.number({
    'min': 0,
    'max': 10
}),
      fechaDeExpedicion: faker.date.recent(10),
      createdAt: faker.date.recent(2),
      updatedAt: faker.date.recent(2)
    })
  }
}

module.exports = createSeeds
