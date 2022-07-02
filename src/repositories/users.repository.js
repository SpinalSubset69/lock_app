import { db } from '../database'
import { USERS_SCHEMA } from '../enums'
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
}
 