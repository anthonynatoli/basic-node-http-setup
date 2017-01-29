define( function( require ){
	'use strict';

	var $ = require( 'jquery' );
	var route = require('route');

	$( '#start' ).click( function(){
		console.log( 'button clicked' );
		var temp = new route();
	});
});