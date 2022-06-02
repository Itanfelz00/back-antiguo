'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class land extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.game, {
        as: 'game',
        foreignKey: 'gameId',
      });
      this.belongsTo(models.player, {
        as: 'owner',
        foreignKey: 'ownerId',
      });
    }
  };
  land.init({
    positionId: DataTypes.INTEGER,
    ocupada: DataTypes.BOOLEAN,
    ownerId: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER,
    lvlTransporte: DataTypes.INTEGER,
    lvlVivienda: DataTypes.INTEGER,
    lvlAtaque: DataTypes.INTEGER,
    lvlDefensa: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'land',
  });
  return land;
};