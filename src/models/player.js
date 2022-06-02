'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class player extends Model {
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

      this.belongsTo(models.user, {
        as: 'user',
        foreignKey: 'userId',
      })

      this.hasMany(models.land, {
        as: 'lands',
        foreignKey: 'ownerId',
      })
    }
  };
  player.init({
    userId: DataTypes.INTEGER,
    classType: DataTypes.STRING,
    gold: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'player',
  });
  return player;
};