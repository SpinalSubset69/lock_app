import { validationResult } from 'express-validator/src/validation-result'
import { cartography, jwt } from '../helpers'
import { UsersService } from '../services'

export class AuthController {
  #_usersService

  constructor() {
    this.#_usersService = new UsersService()
  }

  login = async (req, res) => {
    try {
      const { email, password } = req.body
      const user = await this.#_usersService.findUserByEmailAsync(email)

      if (!user) throw new Error('User Not Found')

      const passwordDecrypted = await cartography.Decrpyt(user.password)
      const is_password_valid = passwordDecrypted === password

      if (!is_password_valid) throw new Error('Password is not valid')

      const body = { user: { id: user.id, email: user.email } }
      const token = jwt.SignJwt(body)

      return res.status(200).send({
        message: 'Login Success',
        isSuccess: true,
        token: token,
      })
    } catch (e) {
      return res.status(400).send({
        message: 'Error',
        errors: e.message,
        isSuccess: false,
      })
    }
  }

  signup = async (req, res) => {
    try {
      const user = req.body
      const savedUser = await this.#_usersService.saveUser(user)

      const body = { user: { id: savedUser.id, email: savedUser.email } }
      const token = jwt.SignJwt(body)

      return res.status(200).send({
        isSuccess: true,
        message: 'Signup Success',
        token: token,
      })
    } catch (e) {
      return res.status(400).send({
        message: 'Error',
        errors: e.message,
        isSuccess: false,
      })
    }
  }
}
