import { UsersService } from '../services'

export const passwords_validation_schema = {
  value: {
    notEmpty: true,
    errorMessage: 'Value is required',
  },
  key: {
    notEmpty: true,
    errorMessage: 'Key is required',
  },
  UserId: {
    notEmpty: true,
    errorMessage: 'User ID is required',
    custom: {
      options: (value) => {
        //CHECK EMAIL IS NOT REGISTERED
        const users_service = new UsersService()
        return users_service.findUserByIdAsync(value).then((user) => {
          if (!user) {
            return Promise.reject('User does not exists')
          }
        })
      },
    },
  },
}
