'use strict';
const {v4: uuidv4} = require("uuid")
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.NUMBER
  }, {
      hooks: {
            beforeValidate(user, _){
                user.id = uuidv4()
            }
      },
    sequelize,
    modelName: 'user',
  });
  return user;
};
