import { cartography } from '../helpers'
import { PasswordsRepository } from '../repositories'

export class PasswordsService {
  #_passwordsRepo

  constructor() {
    this.#_passwordsRepo = new PasswordsRepository()
  }

  async saveUserPasswordAsync(userId, password) {
    const passwordHashed = await cartography.Encrypt(password)
    const newPassword = {
      userId: userId,
      value: passwordHashed,
    }
    return await this.#_passwordsRepo.saveAsync(newPassword)
  }

  async updateUserPasswordAsync(password) {
    return await this.#_passwordsRepo.updateAsync(password)
  }

  async deleteUserPasswordAsync(passwordId) {
    return await this.#_passwordsRepo.deleteAsync(passwordId)
  }

  async addPasswordToCategoryAsync(passwordId, categoryId) {}
}
