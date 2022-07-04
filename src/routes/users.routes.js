import { Router } from 'express'
import { UsersController } from '../controllers'
import { checkSchema } from 'express-validator'
import { validateSchemas } from '../middlewares'

const user_controller = new UsersController()

export const userRoutes = Router()

userRoutes.get('/:id', user_controller.getUserPasswords)
