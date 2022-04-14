// INITIATE USER.JSON
users = require('../db/users.json');

//LOGGER STATUS
function get(req, res) {
    res.status(200).json(users);
}

//GET USERS BY ID
function getById(req, res) {
    const idx = users.findIndex(x => x.id == req.query.id);
    if (idx == -1) {
        res.status(404).json({
            message: 'User not found'
        });
    } else {
        res.status(200).json(users[idx]);
    }
}
//ROUTE TO LOGIN PAGE
function loginIndex(req, res) {
    res.render('login');
}
//LOGIN FUNCTION
function login(req, res) {
    const email = req.body.email; //get body of email
    const password = req.body.password; //get body of password

    const idx = users.findIndex(x => x.email === email);
    if (idx == -1) {
        res.status(403).json({
            message: 'Email is not registered'
        });
    } else {
        if (users[idx].password != password) {
            res.status(403).json({
                message: 'Wrong Password'
            });
        } else {
            res.status(200).json({
                message: 'Login successful'
            });
        }
    }
}
//Export Module to route.js
module.exports = {
    get,
    getById,
    loginIndex,
    login
}