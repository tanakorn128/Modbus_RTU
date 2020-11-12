var mongoose = require('./config/mongoose');
var express = require('./config/express');
var cors = require('cors');
var db = mongoose();
var app = express();
var render = function(req, res) {

}
app.use(cors({origin: 'null'}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.listen(3010);
module.exports = app;

console.log('Server running at http://localhost:3010');