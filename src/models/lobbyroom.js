'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lobbyRoom extends Model {

    static associate(models) {
      this.hasMany(models.user, {
        as: 'users',
        foreignKey: 'lobbyId',
      })
    };

  };



  lobbyRoom.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'lobbyRoom',
  });

  

  return lobbyRoom;
};