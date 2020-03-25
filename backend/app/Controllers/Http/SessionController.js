'use strict'
const Hash = use('Hash')

class SessionController {
  async store({ request, auth }){
    const { id, password } = request.all()
    const { token } = await auth.attempt(id, password)

    return token
  }

  async destroy(){
    await auth.logout()
  }
}

module.exports = SessionController
