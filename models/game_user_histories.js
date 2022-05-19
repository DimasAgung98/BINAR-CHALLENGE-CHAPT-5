'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class game_user_histories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      game_user_histories.belongsTo(models.game_users, {
        foreignKey: "UserId",
        onDelete: "SET NULL"
      })
    }
  }
  game_user_histories.init({
    game_result: DataTypes.BOOLEAN,
    achieved_on: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'game_user_histories',
  });
  return game_user_histories;
};