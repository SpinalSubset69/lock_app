import { CategoriesServices } from '../services'

export class CategoriesController {
  #_categoriesService

  constructor() {
    this.#_categoriesService = new CategoriesServices()
  }

  saveCategory = async (req, res) => {
    try {
      const category = req.body
      const categorySaved = await this.#_categoriesService.saveCategory(
        category,
      )

      return res.status(200).json({
        message: 'Category Saved',
        isSuccess: true,
        category: categorySaved,
      })
    } catch (e) {
      return res.status(400).send({
        message: 'Error',
        errors: e.message,
        isSuccess: false,
      })
    }
  }

  getCategoryPasswords = async (req, res) => {
    try {
      const categoryId = req.params.id

      if (!categoryId) throw new Error('Must Provide a category id ')

      const category = await this.#_categoriesService.getCategoryPasswords(
        categoryId,
      )

      return res.status(200).json({
        message: 'Passwords',
        isSuccess: true,
        category: category.Passwords,
      })
    } catch (e) {
      return res.status(400).send({
        message: 'Error',
        errors: e.message,
        isSuccess: false,
      })
    }
  }
}
