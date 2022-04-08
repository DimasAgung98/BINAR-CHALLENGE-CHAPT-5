//import module express
const express = require('express');
//inisiasi module express
const app = express();
//localhost port
const PORT = 8000;
//declare ejs framework
app.set('view engine', 'ejs');

//Running express server using port 8000
app.listen(PORT, () => {
  console.log(`Server is Runnning On Port ${PORT}`);
})

//MIDDLEWARE
app.use('/public',express.static('public'));
app.use(express.json());

//CONTROLLER
const indexController = require('./controllers/index');
const gameController = require('./controllers/game');
const loginController = require('./controllers/login');

//ROUTES
app.get('/', indexController.index);
app.get('/game', gameController.index);
app.get('/login', loginController.index);



