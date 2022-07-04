import { DataTypes } from 'sequelize'
import { db } from '../database'

export const Password = db.define(
  'Password',
  {
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  },
)
