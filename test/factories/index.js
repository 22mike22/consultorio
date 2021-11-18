const factoryGirl = require('factory-girl')
const adapter = new factoryGirl.SequelizeAdapter()
const factory = factoryGirl.factory
factory.setAdapter(adapter)

factory.cleanUp()

const db = require('../../src/models')

factory.define('Usuarios', db.Usuarios, async () => {
  const attrs = {
    id: factory.seq('Usuarios.id'),
    correo: factory.seq('User.email', (n) => `user${n}@ymail.com`),
    clave: factory.chance('sentence', { words: 5 }),
  }
  return attrs
})

module.exports = factory
