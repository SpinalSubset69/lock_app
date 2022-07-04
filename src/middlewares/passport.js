import passport from 'passport'
import { Strategy } from 'passport-local'
import { cartography } from '../helpers'
import { UsersService } from '../services'

export class PassportMiddleware {
  #_usersService
  constructor() {
    this.#_usersService = new UsersService()
  }

  async LoginStrategy() {
    passport.use(
      'login',
      new Strategy(
        {
          usernameField: 'email',
          passwordField: 'password',
        },
        async (email, password, done) => {
          //Validate SignUp
         
        },
      ),
    )
  }
}
