'use strict'

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Ong extends Model {
  static boot() {
    super.boot()

    /**
     * A hook to hash the ong password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (ongInstance) => {
      if (ongInstance.dirty.password) {
        ongInstance.password = await Hash.make(ongInstance.password)
      }
    })
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens() {
    return this.hasMany('App/Models/Token')
  }
}

module.exports = Ong
