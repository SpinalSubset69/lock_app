import { UsersService } from '../services'

export const category_validation_schema = {
  UserId: {
    notEmpty: true,
    errorMessage: 'User ID is required',
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
  name: {
    notEmpty: true,
    errorMessage: 'Category name is required',
  },
}
