//import module express
const express = require('express');
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

//CONTROLLER
const indexController = require('./controllers/index');
const gameController = require('./controllers/game');
const loginController = require('./controllers/login');

//ROUTES
app.get('/', indexController.index);
app.get('/game', gameController.index);
app.get('/login', loginController.index);

//Running express server using port 8000
app.listen(PORT, () => {
  console.log(`Server is Runnning On Port ${PORT}`);
})

