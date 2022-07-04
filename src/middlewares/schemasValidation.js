import { validationResult } from 'express-validator/src/validation-result'

export function validateSchemas(req, res, next) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send({
      message: 'Schema not satisfied',
      errors: errors.array(),
    })
  }
  next()
}
