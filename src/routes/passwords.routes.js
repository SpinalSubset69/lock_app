import { Router } from 'express'
import { PasswordsController } from '../controllers'
import { validateSchemas } from '../middlewares'
import { checkSchema } from 'express-validator/src/middlewares/schema'
import {
  passwords_validation_schema,
  password_to_category_validation_schema,
} from '../validations'

const paswords_controller = new PasswordsController()

export const passwordsRoutes = Router()

passwordsRoutes.post(
  '/',
  checkSchema(passwords_validation_schema),
  validateSchemas,
  paswords_controller.savePassword,
)

passwordsRoutes.post(
  '/addtocategory',
  checkSchema(password_to_category_validation_schema),
  validateSchemas,
  paswords_controller.addPaswordToCategory,
)
