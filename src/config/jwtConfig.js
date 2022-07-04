import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`),
})

export const jwtConfig = {
  secret:
    process.env.JWT_SECRET ||
    'akjghfaslzxcasdjklgisadkfhjzxcvasdfqwasdfasxkluyw',
  expiresIn: process.env.JWT_EXPIRES_IN || '3d',
}
