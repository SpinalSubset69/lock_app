import { UsersService } from '../services'
import { validationResult } from 'express-validator/src/validation-result'
import { logEvents } from '../helpers'
import { User } from './../models'

export class UsersController {
  #_usersService

  constructor() {
    this.#_usersService = new UsersService()
  }

  getUserPasswords = async (req, res) => {
    try {
      const userId = req.params.id
      if (!userId) throw new Error('User Id Must be provided')
      const user = await this.#_usersService.getUserPasswordsAsync(userId)

      if (user) {
        return res.status(200).json({
          isSuccess: true,
          message: 'Passwords',
          passwords: user.Passwords,
        })
      }
      throw new Error('Passwords Not Found')
    } catch (e) {
      return res.status(404).json({
        isSuccess: false,
        message: 'Error',
        error: e.message,
      })
    }
  }
}
