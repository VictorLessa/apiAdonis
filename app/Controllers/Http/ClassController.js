'use strict'
const Class = use('App/Models/Class')
class ClassController {
  async index() {

  }

  async store({ request, response }) {
    const data = request.all()
    // auth.user.id pega o id do usuario logado na aplicação
    if (auth.jwtPayload.data.role === 1) {
      const classe = await Class.create(data)
      return classe
    }
    response.status(400).send({status: 'error', result: 'Token invalido'})
  }
}

module.exports = ClassController
