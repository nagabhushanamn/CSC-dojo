/**
 * http://usejsdoc.org/
 */

define([ 'dojo/_base/declare', 
         'dijit/Dialog' ], 
	
function(declare, Dialog) {

	// create class
	var HelloDialog = declare('app.HelloDialog',[ Dialog ], {
		title : 'hello',
		content : 'Welcome to DOJO-world'
	});

	return HelloDialog;

});