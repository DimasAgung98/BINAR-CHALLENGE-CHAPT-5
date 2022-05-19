// const { game_users } = require('./models');
// const { game_user_biodata } = require('./models');
// const { game_user_histories } = require('./models');

//FUNCTION TO ROUTE AND DISPLAY DASHBOARD PAGE
function index(request, response) {
    response.render('dashboard');
}

function playerHistory(request, response) {
    response.render('playerhistory');
}

function playerList(request, response) {
      response.render('playerlist');
}
    
function leaderBoard(request, response) {
    response.render('leaderboard');
}

//Export Module to route.js
module.exports = {
    index,
    playerHistory,
    playerList,
    leaderBoard
}