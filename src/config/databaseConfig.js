import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`),
})

export const databaseConfig = {
  database: process.env.DATABASE_NAME || 'lock_app_db',
  username: process.env.DATABASE_USERNAME || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'Resumiendo69%',
  host: process.env.DATABASE_HOST || 'localhost',
  dialect: process.env.DATABASE_DIALECT || 'postgres',
}
