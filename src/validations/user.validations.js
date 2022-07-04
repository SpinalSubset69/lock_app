import { UsersService } from './../services'

/* A validation schema for the user model. */
export const user_validation_schema = {
  first_name: {
    notEmpty: true,
    errorMessage: 'First Name is required',
  },
  last_name: {
    notEmpty: true,
    errorMessage: 'Last Name is required',
  },
  phone: {
    notEmpty: false,
    errorMessage: 'Phone format is invalid',
  },
  password: {
    isStrongPassword: {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
    },
    errorMessage:
      'Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, and one number',
  },
  email: {
    normalizeEmail: true,
    isEmail: true,
    custom: {
      options: async (value) => {
        if (await new UsersService().findUserByEmailAsync(value)) {
          return Promise.reject('Email address already taken')
        }
      },
    },
  },
}
