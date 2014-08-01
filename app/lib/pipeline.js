'use strict';

var morgan = require('morgan');
var bodyParser = require('body-parser');

module.exports = function(app, express){
  app.use(morgan('dev'));
  app.use(express.static(__dirname + '/../static'));
  app.use(bodyParser.urlencoded({extended:true}));

  app.get('/', function(req, res){
    res.render('index');
  });

  console.log('Express Pipeline Established');
};

