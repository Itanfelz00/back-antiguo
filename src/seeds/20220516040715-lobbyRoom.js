'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const lobbiesArray = [];
    lobbiesArray.push({
      name: 'los muele webos',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return queryInterface.bulkInsert('lobbyRooms', lobbiesArray)
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
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
