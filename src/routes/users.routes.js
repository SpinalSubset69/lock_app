import { Router } from 'express'
import { UsersController } from '../controllers'
import { checkSchema } from 'express-validator'
import { user_validation_schema } from '../validations'

const user_controller = new UsersController()

export const userRoutes = Router()
userRoutes.post(
  '/users',
  checkSchema(user_validation_schema),
  user_controller.saveUser,
)
