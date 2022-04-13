//----------INITIATE----------//

//import module express
const express = require('express');
//import module morgan
const morgan = require('morgan');
//import route
const route = require('./controllers/route');
//inisiasi module express
const app = express();
//localhost port
const PORT = 8000;
//declare ejs view engine
app.set('view engine', 'ejs');

//----------MIDDLEWARE, CONTROLLER, ROUTE----------//

//public folder contain content file
app.use('/public',express.static('public'));
//MORGAN MODULE LOGGER
app.use(morgan('dev'));
//BUILT-IN MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//IMPLEMENTATION OF THE ROUTE INTO THE APPLICATION
app.use(route);

//Running express server using port 8000
app.listen(PORT, () => {
  console.log(`Server is Runnning On Port ${PORT}`);
})

