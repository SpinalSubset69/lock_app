import { CategoriesRepository } from '../repositories/categories.repository'

export class CategoriesServices {
  #_categoriesRepo

  constructor() {
    this.#_categoriesRepo = new CategoriesRepository()
  }

  findCategoryById = async (CategoryId) => {
    return await this.#_categoriesRepo.findByIdAsync(CategoryId)
  }

  getCategoriesByUserId = async (userId) => {
    return await this.#_categoriesRepo.getCategoriesByUserId(userId)
  }

  saveCategory = async (category) => {
    return await this.#_categoriesRepo.saveAsync(category)
  }

  getCategoryPasswords = async (category) => {
    return await this.#_categoriesRepo.getCategoryPasswords(category)
  }
}
