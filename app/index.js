'use strict';

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
  res.render('index');
});

var port = process.env.PORT;

app.listen(port, function(){
  console.log('Express is now listening on PORT:',port);
});
