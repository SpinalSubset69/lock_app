import { UsersService } from '../services'

export const passwords_validation_schema = {
  password: {
    notEmpty: true,
    errorMessage: 'Password is required',
  },
  userId: {
    notEmpty: true,
    errorMessage: 'Password is required',
    custom: {
      options: (value) => {
        //CHECK EMAIL IS NOT REGISTERED
        const users_service = new UsersService()
        return users_service.findUserByEmailAsync(value).then((user) => {
          if (user) {
            return Promise.reject('Email address already taken')
          }
        })
      },
    },
  },
}
