'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const crypto = use('crypto')


// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })
const ong_id = []

Factory.blueprint('App/Models/Ong', (faker) => {
  const id = crypto.randomBytes(5).toString('HEX').toUpperCase();
  ong_id.push(id);

  return {
    id: id,
    name: faker.name(),
    password: "12345",
    email: faker.email(),
    whatsapp: faker.phone(),
    city: faker.city(),
    uf: faker.state()
  }
})

Factory.blueprint('App/Models/Incident', (faker) => {
  return {
    title: faker.sentence({ words: 2 }),
    description: faker.paragraph({ sentences: 1 }),
    value: faker.floating({ min: 0, max: 100 }),
    ong_id: async() => {
      await Factory.model('App/Models/Ong').create()
      return ong_id[faker.integer({ min: 0, max: 9 })]
    }
  }
})

