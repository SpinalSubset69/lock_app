import { cartography } from '../helpers'
import { UsersRepository } from '../repositories'

export class UsersService {
  #_usersRepo
  constructor() {
    this.#_usersRepo = new UsersRepository()
  }

  async saveUser(user) {
    user.password = await cartography.Encrypt(user.password)
    return await this.#_usersRepo.saveAsync(user)
  }

  async findUserByEmailAsync(email = '') {
    return await this.#_usersRepo.findUserByEmailAsync(email)
  }

  async getUserPasswordsAsync(userId) {
    return await this.#_usersRepo.findUserbyIdWithPasswordsAsync(userId)
  }

  async 
}
