import { Router } from 'express'
import { UsersController } from '../controllers'
import { validateSchemas } from '../middlewares'
import { userid_validation_schema } from '../validations'
import { checkSchema } from 'express-validator/src/middlewares/schema'

const user_controller = new UsersController()

export const userRoutes = Router()

userRoutes.get('/:id', user_controller.getUserPasswords)
userRoutes.get('/categories/:id', user_controller.getUserCategories)
