'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Recipe}) {
      /**
       * define Relation here
       */
      this.hasMany(Recipe, { foreignKey: 'author_id', as: 'recipes' })
    }

    toJSON() {
      // hide id column when data fetched
      // return { ...this.get(), id: undefined }
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'User must have a name' },
          notEmpty: { msg: 'Name must not be empty' },
        },
      },
    },
    {
      sequelize,
      tableName: 'users',
      modelName: 'User',
    }
  )
  return User
}
