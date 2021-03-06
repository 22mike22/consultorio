const factories = require('../factories')
const db = require('../../src/models')

before(async function () {
  try {
    for (let index = 0; index < 4; index++) {
      const usuario = await factories.create('Usuario')
    }
  } catch (error) {
    console.error(error)
  }
})

after(async function () {
  await db.sequelize.sync({ force: true })
})
