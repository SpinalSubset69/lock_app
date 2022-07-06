import { Router } from 'express'
import { checkSchema } from 'express-validator'
import { CategoriesController } from '../controllers'
import { validateSchemas } from '../middlewares'
import { category_validation_schema } from '../validations'

const categories_controller = new CategoriesController()

export const categoriesRoutes = Router()
categoriesRoutes.post(
  '/',
  checkSchema(category_validation_schema),
  validateSchemas,
  categories_controller.saveCategory,
)
categoriesRoutes.get('/:id', categories_controller.getCategoryPasswords)
