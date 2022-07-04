import { Router } from 'express'
import { PasswordsController } from '../controllers'
import { validateSchemas } from '../middlewares'
import { checkSchema } from 'express-validator/src/middlewares/schema'
import { passwords_validation_schema } from '../validations/passwords.validation'

const paswords_controller = new PasswordsController()

export const passwordsRoutes = Router()

passwordsRoutes.post(
  '/',
  checkSchema(passwords_validation_schema),
  validateSchemas,
  paswords_controller.savePassword,
)
