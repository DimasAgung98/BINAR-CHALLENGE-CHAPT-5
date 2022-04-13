
const users = require('../db/users.json');
const fs = require('fs');

function registerIndex(req, res) {
    res.render('register');
}

//ADD NEW USERS
function registerData(req, res) {
    //READ DATA BODY
    const email = req.body.email;
    const password = req.body.password;
    //COUNT DATA 
    const lastItem = users[users.length - 1];
    //CREATE NEW ID
    const id = lastItem.id + 1;
     //CREATE NEW DATA OBJECT
     const user = {
        id,
        email,
        password,
    };
    users.push(user);
    let data = JSON.stringify(users, null, 2);
    fs.writeFileSync('db/users.json', data);
    console.log(email, password);
    res.status(201).json({ message: 'Register berhasil!' }); 
}

function getAPI(res, req) {
    res.send(users);
}

module.exports = {
    registerIndex,
    registerData,
    getAPI
}