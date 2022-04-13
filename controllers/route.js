//IMPORT ROUTER EXPRESS
const express = require('express');
const router = express.Router();

//CONTROLLER
const indexController = require('./index'); 
const gameController = require('./game');
const loginController = require('./login');
const registerController = require('./register');
const errorController = require('./404');
let users = require('../db/users.json');

// ROUTE
router.get('/', indexController.index);
router.get('/game', gameController.index);
router.get('/register', registerController.registerIndex);
router.get('/login', loginController.loginIndex);
router.get('/register', registerController.getAPI); //new

router.get('/users', (req, res) => {
  res.status(200).json(users);
})

//AUTHENTICATION
router.post('/register', registerController.registerData);

//HANDLING UNKNOWN ENDPOINTS
router.get('*', errorController.index);

//EXPORT MODULE ROUTER
module.exports = router;