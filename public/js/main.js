requirejs.config({
	baseUrl: '/',
	paths:{
    	'jquery': '/bower_components/jquery/dist/jquery.min',
    	'handlebars': '/bower_components/handlebars/handlebars',
    	'underscore': '/bower_components/underscore/underscore',
    	'home': 'public/js/home',
    	'route': 'public/js/route'
  	}		
});

define( ['home', 'route'], function( require ){

});