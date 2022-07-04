import { CategoriesRepository } from '../repositories/categories.repository'

export class CategoriesServices {
  #_categoriesRepo

  constructor() {
    this.#_categoriesRepo = new CategoriesRepository()
  }

  findCategoryById = async (CategoryId) => {
    return await this.#_categoriesRepo.findByIdAsync(CategoryId)
  }
}
