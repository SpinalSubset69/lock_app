import { cartography } from '../helpers'
import { PasswordsRepository } from '../repositories'

export class PasswordsService {
  #_passwordsRepo

  constructor() {
    this.#_passwordsRepo = new PasswordsRepository()
  }

  async saveUserPasswordAsync(args) {
    return await this.#_passwordsRepo.saveAsync({
      ...args,
      value: await cartography.Encrypt(args.value),
    })
  }

  async updateUserPasswordAsync(password) {
    return await this.#_passwordsRepo.updateAsync(password)
  }

  async deleteUserPasswordAsync(passwordId) {
    return await this.#_passwordsRepo.deleteAsync(passwordId)
  }

  async addPasswordToCategoryAsync(passwordId, categoryId) {}
}
