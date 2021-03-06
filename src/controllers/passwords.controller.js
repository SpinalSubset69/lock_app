import { Category } from '../models'
import { PasswordsService } from '../services/'

export class PasswordsController {
  #_passwordsService

  constructor() {
    this.#_passwordsService = new PasswordsService()
  }

  savePassword = async (req, res) => {
    try {
      //TODO: PASSWORD MUST COM ENCRYPTED FROM THE CLIENT
      const newPass = req.body
      this.#_passwordsService.saveUserPasswordAsync(newPass)
      res.status(200).json({
        message: 'New Password saved',
        isSuccess: true,
      })
    } catch (e) {
      return res.status(404).json({
        isSuccess: false,
        message: 'Error',
        error: e.message,
      })
    }
  }

  updatePassword = async (req, res) => {}

  deletePassword = async (req, res) => {}

  addPaswordToCategory = async (req, res) => {
    try {
      //MUST VERIFY CATEGORY BELONGS TO THE USER
      const { CategoryId, passwordId } = req.body
      await this.#_passwordsService.addPasswordToCategoryAsync(
        passwordId,
        CategoryId,
      )

      res.status(200).json({
        message: 'Password saved on category',
        isSuccess: true,
      })
    } catch (e) {
      return res.status(404).json({
        isSuccess: false,
        message: 'Error',
        error: e.message,
      })
    }
  }
}
