// INITIATE USER.JSON
users = require('../db/users.json');

function get(req, res) {
    res.status(200).json(users);
}

//GET USERS BY ID
function getById(req, res) {
    const idx = users.findIndex(x => x.id == req.query.id);
    if (idx == -1) {
        res.status(404).json({ message: 'User not found'});
    } else {
        res.status(200).json(users[idx]);
    }
}

function loginIndex(req, res) {
    res.render('login');
}

function login(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const idx = users.findIndex(x => x.email === email);
    if (idx == -1) {
        res.status(403).json({ message: 'email tidak terdaftar!'});
    } else {
        if (users[idx].password != password) {
            res.status(403).json({ message: 'Password salah!'});
        } else {
           res.status(200).json({ message: 'Login berhasil!' }); 
        }
    }
}

module.exports = {
    get,
    getById,
    loginIndex,
    login
}