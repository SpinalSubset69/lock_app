import { User } from './user'
import { Category } from './category'
import { Password } from './password'

export const BuildDBAssociations = () => {
  User.hasMany(Category)
  User.hasMany(Password)
  Category.hasMany(Password)

  Category.belongsTo(User)
  Password.belongsTo(User)
  Password.belongsTo(Category, {
    foreignKey: {
      allowNull: true, //Since Password may not be in a category
    },
  })
}
 