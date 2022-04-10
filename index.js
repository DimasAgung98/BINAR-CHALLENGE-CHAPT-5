//import module express
const express = require('express');
//import module morgan
const morgan = require('morgan');
//inisiasi module express
const app = express();
//localhost port
const PORT = 8000;
//declare ejs view engine
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use('/public',express.static('public'));
//BUILT-IN MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//MORGAN MODULE LOGGER
app.use(morgan('dev'));

//CONTROLLER
const indexController = require('./controllers/index');
const gameController = require('./controllers/game');
const loginController = require('./controllers/login');
const errorController = require('./controllers/404');


//ROUTE
app.get('/', indexController.index);
app.get('/game', gameController.index);
app.get('/login', loginController.index);
//handling unknown endpoints
app.get('*', errorController.index);

//Running express server using port 8000
app.listen(PORT, () => {
  console.log(`Server is Runnning On Port ${PORT}`);
})

