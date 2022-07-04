import { GenericRepository } from './generic.repository'
import { CATEGORIES_SCHEMA } from './../enums'
import { db } from './../database'

export class CategoriesRepository extends GenericRepository {
  constructor() {
    super(CATEGORIES_SCHEMA, db)
  }
}
