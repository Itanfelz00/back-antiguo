'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.player, {
        as: 'players',
        foreignKey: 'gameId',
      });

      this.hasMany(models.land, {
        as: 'lands',
        foreignKey: 'gameId',
      })
    }

    initLands(Land, id) {
      for (let i = 1; i < 16 + 1 ; i++) {
        const land = Land.build({positionId: i, gameId: id});
        land.save();
      }
      console.log("Mapita creado correctamente")
    }
  };
  game.init({
    numberOfPlayers: DataTypes.INTEGER,
    currentPlayerId: DataTypes.INTEGER,
    nextPlayerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'game',
  });
  return game;
};