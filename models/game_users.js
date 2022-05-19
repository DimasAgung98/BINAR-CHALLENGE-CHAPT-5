'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class game_users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      game_users.hasOne(models.game_user_biodata, {
        foreignKey: "UserId",
        onDelete: "SET NULL",
      });
      game_users.hasMany(models.game_user_histories, {
        foreignKey: "UserId",
        onDelete: "SET NULL",
      });
    }
  }
  game_users.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    admin: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'game_users',
  });
  return game_users;
};