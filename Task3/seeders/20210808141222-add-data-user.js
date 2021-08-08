'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User', [{
      name: "yogo",
      email: "yogo@example.com",
      age: 22,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "adi",
      email: "adi@example.com",
      age: 23,
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User', null, {})
  }
};
