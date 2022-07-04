export const login_validation_schema = {
  email: {
    notEmpty: true,
    normalizeEmail: true,
    errorMessage: 'Email is required',
  },
  password: {
    notEmpty: true,
    errorMessage: 'Password is required',
  },
}
