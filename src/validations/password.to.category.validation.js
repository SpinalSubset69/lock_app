import { CategoriesServices, PasswordsService, UsersService } from '../services'

export const password_to_category_validation_schema = {
  passwordId: {
    notEmpty: true,
    errorMessage: 'Password Id is required',
    custom: {
      options: async (value) => {
        if (value) {
          if (!(await new PasswordsService().findPasswordByIdAsync(value))) {
            return Promise.reject('Password does not exists')
          }
        }
      },
    },
  },
  UserId: {
    notEmpty: true,
    errorMessage: 'UserId Id is required',
    custom: {
      options: async (value) => {
        if (value) {
          if (!(await new UsersService().findUserByIdAsync(value))) {
            return Promise.reject('User does not exists')
          }
        }
      },
    },
  },
  CategoryId: {
    notEmpty: true,
    errorMessage: 'Category ID is required',
    custom: {
      options: async (value) => {
        if (value) {
          if (!(await new CategoriesServices().findCategoryById(value))) {
            return Promise.reject('Category does not exists')
          }
        }
      },
    },
  },
}
