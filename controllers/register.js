// users data is load from users.json file
const users = require('../db/users.json');
// IMPORT MODULE FS
const fs = require('fs');
//ROUTE TO REGISTER PAGE
function registerIndex(req, res) {
    res.render('register');
}

//ADD NEW USERS
function registerData(req, res) {
    //READ DATA BODY
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const birthday = req.body.birthday;
    const age = req.body.age;
    const gender = req.body.gender;
    const country = req.body.subject;


    //COUNT DATA 
    const lastItem = users[users.length - 1];
    //CREATE NEW ID
    const id = lastItem.id + 1;
    //CREATE NEW DATA OBJECT
    const user = {
        id,
        username,
        password,
        email,
        birthday,
        age,
        gender,
        country
    };
    users.push(user);
    //Rewrite JSON File
    let data = JSON.stringify(users, null, 2);
    fs.writeFileSync('db/users.json', data);
    //LOGGER TERMINAL
    console.log(user);
    //LOGER SUCCESS
    res.status(201).json({
        message: 'Registration Successful'
    });
}

function getAPI(res, req) {
    res.send(users);
}
//Export Module to route.js
module.exports = {
    registerIndex,
    registerData,
    getAPI
}