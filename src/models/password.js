import { DataTypes } from 'sequelize'
import { db } from '../database'

//KEY STANDS FOR THE APP THE PASSWORD BELONGS TO
export const Password = db.define(
  'Password',
  {
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    key: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  },
)
