//IMPORT ROUTER EXPRESS
const express = require('express');
const router = express.Router();
let users = require('../db/users.json');

//CONTROLLER
const indexController = require('./index'); 
const gameController = require('./game');
const loginController = require('./login');
const registerController = require('./register');
const userAPIController = require('./userAPI');

// ROUTE
router.get('/', indexController.index);
router.get('/game', gameController.index);
router.get('/register', registerController.registerIndex);
router.get('/login', loginController.loginIndex);
router.get('/register', registerController.getAPI);
router.get('/users', loginController.get);
router.get('/login', loginController.getById);
router.post('/login', loginController.login);

//AUTHENTICATION
router.post('/register', registerController.registerData);

//USERS MANAGEMENT
router.get('/users', userAPIController.showUser);
router.get('/users/:id', userAPIController.getUserByID);

//EXPORT MODULE ROUTER
module.exports = router;