//import sequelize model
const { game_users, game_user_biodata, game_user_histories } = require('../models');

async function getAllUsers(request, response) {
    const getUsers = await game_users.findAll();
}