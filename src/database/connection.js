import { Sequelize } from 'sequelize'
import { databaseConfig } from '../config'

export const db = new Sequelize(
  databaseConfig.database,
  databaseConfig.username,
  databaseConfig.password,
  {
    host: databaseConfig.host,
    dialect: databaseConfig.dialect,
  },
)


export const testConnection = async (databaseInstance) => {
    try {
        await databaseInstance.authenticate();
        console.log('Connection has been established successfully with the database.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
} 