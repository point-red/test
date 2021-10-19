'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
        'users',
        [
          {
            name: 'John Doe',
            email: 'john@email.com',
            age: 30,
          },
          {
            name: 'Jane Doe',
            email: 'jane@email.com',
            age: 20,
          },
        ],
        {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {})
  }
};
