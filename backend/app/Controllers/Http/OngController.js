'use strict'
const crypto = use('crypto')

const Ong = use('App/Models/Ong')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with ongs
 */

class OngController {
  /**
   * Show a list of all ongs.
   * GET ongs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const ongs = await Ong.all()
    return ongs
  }

  /**
   * Create/save a new ong.
   * POST ongs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    const { name, email, whatsapp, city, uf, password } = request.body
    const id = crypto.randomBytes(5).toString('HEX').toUpperCase()

    return await Ong.create({ id, name, email, whatsapp, city, uf, password })
  }

  /**
   * Display a single ong.
   * GET ongs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const { name, email, whatsapp, city, uf } = await Ong.findOrFail(params.id)
    return { name, email, whatsapp, city, uf }
  }

  /**
   * Update ong details.
   * PUT or PATCH ongs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const ong = await Ong.findOrFail(params.id)
    ong.merge(request.body)

    await ong.save()

    return ong
  }

  /**
   * Delete a ong with id.
   * DELETE ongs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const ong = await Ong.findOrFail(params.id)
    await ong.delete()
  }
}

module.exports = OngController
