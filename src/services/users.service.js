import { UsersRepository } from '../repositories/users.repository'

export class UsersService {
  #_usersRepo
  constructor() {
    this.#_usersRepo = new UsersRepository()
  }

  async saveUser(user) {
    return await this.#_usersRepo.saveAsync(user)
  }

  async findUserByEmailAsync(email = '') {
    return await this.#_usersRepo.findUserByEmailAsync(email)
  }
}
