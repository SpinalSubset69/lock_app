import { Router } from 'express'
import { validateSchemas } from '../middlewares'
import { AuthController } from '../controllers'
import { checkSchema } from 'express-validator'
import { login_validation_schema } from '../validations/login.validations'
import { user_validation_schema } from '../validations'

const authController = new AuthController()

export const authRoutes = Router()
authRoutes.post(
  '/signup',
  checkSchema(user_validation_schema),
  validateSchemas,
  authController.signup,
)
authRoutes.post(
  '/login',
  checkSchema(login_validation_schema),
  validateSchemas,
  authController.login,
)
