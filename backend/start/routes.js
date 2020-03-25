'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
Route.get('/', () => {
  return ({"ApiStatus":"working"})
})
Route.post('login', 'SessionController.store')
Route.delete('logout', 'SessionController.destroy')
Route.get('incidents', 'IncidentController.index')
Route.get('incidents/:id', 'IncidentController.show')

Route.resource('ongs', 'OngController').apiOnly()

Route.group(() => {
  Route.resource('incidents', 'IncidentController').apiOnly().except(['index', 'show'])
  Route.resource('profiles', 'ProfileController').apiOnly()
}).middleware('auth')


