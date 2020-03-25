'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class IncidentsSchema extends Schema {
  up () {
    this.create('incidents', (table) => {
      table.increments()
      table.string('title').notNullable()
      table.string('description').notNullable()
      table.decimal('value').notNullable()
      table.string('ong_id').notNullable()
      table.foreign('ong_id').references('id').inTable('ongs').onDelete('Cascade').onUpdate('Cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('incidents')
  }
}

module.exports = IncidentsSchema
