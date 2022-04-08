users = require('../db/users.json');

function index(request, response) {
    response.render('login');
}

module.exports = {
    index
}