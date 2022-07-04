import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`),
})

export const cartographyConfig = {
  cipher_iv: process.env.CIPHER_IV || 'asdfghjkl1234561',
  password_key: process.env.PASSWORD_KEY || 'keydeprueba',
}
