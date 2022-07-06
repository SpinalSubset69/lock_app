import { GenericRepository } from './generic.repository'
import { CATEGORIES_SCHEMA } from './../enums'
import { db } from './../database'
import { Password } from '../models'

export class CategoriesRepository extends GenericRepository {
  constructor() {
    super(CATEGORIES_SCHEMA, db)
  }

  async getCategoriesByUserId(userId) {
    return await this.db.models[this.schema].find({
      where: {
        UserId: userId,
      },
    })
  }

  async getCategoryPasswords(category) {
    return await this._db.models[this.schema].findByPk(category, {
      include: {
        model: Password,
        attributes: ['value', 'key', 'createdAt', 'updatedAt', 'id'],
      },
      where: {
        id: category,
      },
    })
  }
}
