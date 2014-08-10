var express = require('express');
var http = require('http');
var exhbs = require( 'express3-handlebars' );

var app = express();

var server = http.createServer(app);

app.engine( 'handlebars', exhbs( { defaultLayout: 'master' } ) );
app.set( 'view engine', 'handlebars' );

app.use( express.static( __dirname ) );

app.get('/', function(req, res){
  res.render( 'home' );
});

server.listen(3000, function(){
  console.log('listening on *:3000');
  console.log( __dirname );
});