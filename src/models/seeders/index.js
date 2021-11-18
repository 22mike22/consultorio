// seeders/index.js
const db = require('../index')
const chance = require('chance').Chance()
const faker = require('faker')

const createSeeds = async () => {
  const facturasCount = 50

  chance.mixin({
    factura: function () {
      return {
        fechaFactura: chance.date(),
        monto: chance.integer({min:0,max:1000}),
        createdAt: chance.date(),
        updatedAt: chance.date()
      }
    },
  })
  for (let index = 0; index < facturasCount; index++) {
    const factura = await db.Facturas.create(chance.factura())
  }
  for (let index = 0; index < facturasCount; index++) {
    const factura = await db.Facturas.create({
      fechaFactura: faker.date.recent(10),
      monto: faker.datatype.number({
    'min': 0,
    'max': 1000
}),
      createdAt: faker.date.recent(2),
      updatedAt: faker.date.recent(2)
    })
  }
}

module.exports = createSeeds
