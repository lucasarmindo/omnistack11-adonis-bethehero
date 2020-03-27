'use strict'

const Incident = use('App/Models/Incident')
const Database = use('Database')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with incidents
 */

class IncidentController {
  /**
   * Show a list of all incidents.
   * GET incidents
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response }) {
    const { page } = request.all()

    const incidents = await Database
      .select([
        'incidents.title',
        'incidents.description',
        'incidents.value',
        'incidents.ong_id',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf',
      ])
      .table('incidents')
      .innerJoin('ongs', 'ongs.id', 'incidents.ong_id')
      .paginate(page, 5)

    // const incidents = await Incident
    //   .query()
    //   .select([
    //     'incidents.title',
    //     'incidents.description',
    //     'incidents.value',
    //     'incidents.ong_id',
    //   ])
    //   .with('ongs')
    //   .paginate(page, 5)


    response.header('X-Total-Count', incidents.total)
    return incidents
  }

  /**
   * Create/save a new incident.
   * POST incidents
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    const { title, description, value } = request.body
    const ong_id = request.header('Authorization')

    await Incident.create({ title, description, value, ong_id })

    return { ong_id, title, description, value };
  }

  /**
   * Display a single incident.
   * GET incidents/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const { title, description, value } = await Incident.findOrFail(params.id)
    return { title, description, value }
  }

  /**
   * Update incident details.
   * PUT or PATCH incidents/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const incident = await Incident.findOrFail(params.id)
    const ong_id = request.header('Authorization')

    if (incident.ong_id !== ong_id) {
      return response.status(401).send('Unauthorized')
    }

    incident.merge(request.body)

    await incident.save()

    return incident
  }

  /**
   * Delete a incident with id.
   * DELETE incidents/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const incident = await Incident.findOrFail(params.id)
    const ong_id = request.header('Authorization')

    if (incident.ong_id !== ong_id) {
      return response.status(401).send('Unauthorized')
    }
    await incident.delete()
  }
}

module.exports = IncidentController
