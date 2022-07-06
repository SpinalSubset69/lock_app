import { UsersService } from '../services'

export class UsersController {
  #_usersService

  constructor() {
    this.#_usersService = new UsersService()
  }

  getUserPasswords = async (req, res) => {
    try {
      const userId = req.params.id
      if (!userId) throw new Error('User Id Must be provided')
      const user = await this.#_usersService.getUserPasswordsAsync(userId)

      if (user) {
        return res.status(200).json({
          isSuccess: true,
          message: 'Passwords',
          passwords: user.Passwords,
        })
      }
      throw new Error('Passwords Not Found')
    } catch (e) {
      return res.status(404).json({
        isSuccess: false,
        message: 'Error',
        error: e.message,
      })
    }
  }

  getUserCategories = async (req, res) => {
    try {
      const userId = req.params.id
      if (!userId) throw new Error('User Id Must be provided')
      const user = await this.#_usersService.getUserCategoriesAsync(userId)

      if (user) {
        return res.status(200).json({
          isSuccess: true,
          message: 'Categories',
          passwords: user.Categories,
        })
      }
      throw new Error('Categories Not Found')
    } catch (e) {
      return res.status(404).json({
        isSuccess: false,
        message: 'Error',
        error: e.message,
      })
    }
  }
}
