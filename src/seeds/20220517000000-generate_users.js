'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const usersArray = [];
    usersArray.push({
      email: 'itanfelz@gmail.com',
      nickname: 'itanfelz00',
      favorite_animal: 'monkey',
      password:'password123',
      lobbyId: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      email: 'catilupis4@gmail.com',
      nickname: 'lupis',
      favorite_animal: 'cat',
      password:'password123',
      lobbyId: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      email: 'pimpollo@gmail.com',
      nickname: 'notyourpollo',
      favorite_animal: 'chicken',
      lobbyId: '1',
      password:'password123',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      email: 'mininaduquesita@gmail.com',
      nickname: 'gordifofis',
      favorite_animal: 'cat',
      password:'password123',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      email: 'tukhadidelbulla27@gmail.com',
      nickname: 'chimuelo',
      favorite_animal: 'duck',
      password:'password123',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return queryInterface.bulkInsert('users', usersArray)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
