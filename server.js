var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Card = require('./api/models/CardModel'),
  Column = require('./api/models/ColumnModel'),
  AllController = require('./api/controllers/AllController'),
  bodyParser = require('body-parser'),
  io = require('socket.io').listen(app.listen(port));

// mongoose instance connection url connection
mongoose.connect("mongodb://mongo:27017/CardsDB", { useNewUrlParser: true });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  res.setHeader('Content-Type', 'application/json');

  // Pass to next layer of middleware
  next();
});

var routes = require('./api/routes/CardRoutes'); //importing route
routes(app); //register the route

io.on('connection', socket => {
  console.log('User connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('Cards changed', () => {
    console.log('Emit Cards changed');
    AllController.find_all((result) => io.sockets.emit('Cards changed', result));
  });
})

console.log('Card list RESTful API server started on: ' + port);