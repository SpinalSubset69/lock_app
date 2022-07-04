import { Sequelize } from 'sequelize'
import { databaseConfig } from '../config'
import { logEvents } from './../helpers'

export const db = new Sequelize(
  databaseConfig.database,
  databaseConfig.username,
  databaseConfig.password,
  {
    host: databaseConfig.host,
    dialect: databaseConfig.dialect,
  },
)

export const connectToDatabase = async (databaseInstance) => {
  try {
    await databaseInstance.sync({ force: false })
    logEvents('Connection has been established successfully with the database.')
  } catch (error) {
    logEvents(`Unable to connect to the database: ${error.message}`)
  }
}
