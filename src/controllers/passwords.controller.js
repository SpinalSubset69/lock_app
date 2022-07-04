import { PasswordsService } from '../services/'

export class PasswordsController {
  #_passwordsService

  constructor() {
    this.#_passwordsService = new PasswordsService()
  }

  savePassword = async (req, res) => {
    try {
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

  addPaswordToCategory = async (req, res) => {}
}
