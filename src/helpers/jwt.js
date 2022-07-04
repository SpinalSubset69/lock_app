import Jwt from 'jsonwebtoken'
import { jwtConfig } from '../config'

const SignJwt = (payload) => {
  return Jwt.sign(payload, jwtConfig.secret, {
    expiresIn: jwtConfig.expiresIn,
  })
}

const DecodeJwt = (jwt) => {
  return Jwt.verify(jwt, jwtConfig.secret)
}

export const jwt = {
  SignJwt,
  DecodeJwt,
}
