import { db } from '../database'
import { USERS_SCHEMA } from '../enums'
import { Password } from '../models'
import { GenericRepository } from './generic.repository'

export class UsersRepository extends GenericRepository {
  constructor() {
    super(USERS_SCHEMA, db)
  }

  async findUserByEmailAsync(email) {
    try {
      return await this._db.models[this.schema].findOne({
        where: {
          email,
        },
      })
    } catch (ex) {
      throw new Error(ex.message)
    }
  }

  async findUserbyIdWithPasswordsAsync(userId) {
    return await this._db.models[this.schema].findByPk(userId, {
      include: {
        model: Password,
        attributes: ['value', 'createdAt', 'updatedAt'],
      },
      where: {
        id: userId,
      },
    })
  }
}
