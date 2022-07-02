import { UsersService } from '../services'
import { validationResult } from 'express-validator/src/validation-result'

export class UsersController {
  #_usersService

  constructor() {
    this.#_usersService = new UsersService()
  }

  async saveUser(req, res) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).send({
          message: 'User Schema not satisfied',
          errors: errors.array(),
        })
      }

      const user = req.body
      console.log(user)

      res.status(200).send({
        message: 'EXITO',
      })
    } catch (ex) {
      res.status(500).send({
        message: 'Error',
        error: ex.message,
      })
    }
  }
}
