import { Router } from 'express'
import { UsersController } from '../controllers'

const user_controller = new UsersController()

export const userRoutes = Router()

userRoutes.get('/:id', user_controller.getUserPasswords)
