'use strict'

/*
|--------------------------------------------------------------------------
| IncidentSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class IncidentSeeder {
  async run () {
    await Factory.model('App/Models/Incident').createMany(100)
  }
}

module.exports = IncidentSeeder
