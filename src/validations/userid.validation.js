import { UsersService } from '../services'

export const userid_validation_schema = {
  userId: {
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
}
