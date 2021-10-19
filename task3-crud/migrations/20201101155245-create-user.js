'use strict'
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'User must have a name' },
          notEmpty: { msg: 'Name must not be empty' },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: { msg: 'User must have a email' },
          notEmpty: { msg: 'email must not be empty' },
          isEmail: { msg: 'Must be a valid email address' },
        },
      },
      age: {
        type: Sequelize.INTEGER,
      },
    })
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('users')
  },
}
