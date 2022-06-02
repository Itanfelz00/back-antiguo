'use strict';
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
      this.belongsTo(models.lobbyRoom, {
        as: 'lobbyRoom',
        foreignKey: 'lobbyId',
      });

      this.hasOne(models.player, {
        as: 'player',
        foreignKey: 'userId'
      })
    }
  };
  user.init({
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    lobbyId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};