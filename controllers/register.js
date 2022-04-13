
users = require('../db/users.json');

function registerIndex(req, res) {
    res.render('register');
}

function registerData(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    users.push({email: email, password: password});
    console.log(email, password);
    res.status(201);
    res.redirect('/');
}

function getAPI(res, req) {
    res.send(users);
}

module.exports = {
    registerIndex,
    registerData,
    getAPI
}