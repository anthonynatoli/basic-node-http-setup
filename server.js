var express = require('express');
var http = require('http');
var exhbs = require( 'express3-handlebars' );

var router = require('./routes/router');

var app = express();

var server = http.createServer(app);
var port = 3000; //for localhost testing

app.engine( 'handlebars', exhbs( { defaultLayout: 'master' } ) );
app.set( 'view engine', 'handlebars' );

app.use( express.static( __dirname ) );

app.use('/router', router);	//use router for all routes under /router/*

app.get('/', function(req, res){
  res.render( 'home' ); 		//renders the views/home.handlebars view
});

app.get('/sample_route', function(req, res){
	res.render( 'route' );
});


server.listen(process.env.PORT || port, function(){
  console.log('listening on *:3000');
  console.log( __dirname );
});