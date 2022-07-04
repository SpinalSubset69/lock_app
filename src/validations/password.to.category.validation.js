import { CategoriesServices } from '../services'

export const password_to_category_validation_schema = {
  passwordId: {
    notEmpty: true,
    errorMessage: 'Password Id is required',
  },
  CategoryId: {
    notEmpty: true,
    errorMessage: 'Category ID is required',
    custom: {
      options: async (value) => {
        if (!(await new CategoriesServices().findCategoryById(value))) {
          return Promise.reject('Category does not exists')
        }
      },
    },
  },
}
