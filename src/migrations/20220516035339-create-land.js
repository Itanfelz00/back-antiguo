'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('lands', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ocupada: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      positionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ownerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'players',
          key: 'id',
        }

      },
      gameId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'games',
          key: 'id',
        }
      },
      lvlTransporte: {
        type: Sequelize.INTEGER,
        defaultValue: 1,

      },
      lvlVivienda: {
        type: Sequelize.INTEGER,
        defaultValue: 1,

      },
      lvlAtaque: {
        type: Sequelize.INTEGER,
        defaultValue: 1,

      },
      lvlDefensa: {
        type: Sequelize.INTEGER,
        defaultValue: 1,

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('lands');
  }
};