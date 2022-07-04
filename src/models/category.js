import { DataTypes } from 'sequelize'
import { db } from '../database'

export const Category = db.define(
  'Category',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  },
)
