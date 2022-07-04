import { db } from '../database'
import { PASSWORDS_SCHEMA } from '../enums'
import { GenericRepository } from './generic.repository'

export class PasswordsRepository extends GenericRepository {
  constructor() {
    super(PASSWORDS_SCHEMA, db)
  }

  async addPasswordToCategoryAsync(passwordId, categoryId) {
    const password = await this.findByIdAsync(passwordId)
    if (!password) throw new Error('Password not found')
    password.categoryId = categoryId
    return this.updateAsync(password)
  }
}
