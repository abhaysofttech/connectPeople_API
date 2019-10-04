require('rootpath')();
const express = require('express');
const app = express();

const bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// api routes
//app.use('/users', require('./users/users.controller'));
app.use('/state', require('./state/state.controller'));
//app.use('/city', require('./city/city.controller'));


// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const server = app.listen(port, function () {
  
 // console.log(process.env);
    console.log('Server listening on port ' + port);
});