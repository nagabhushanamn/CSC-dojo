/**
 * http://usejsdoc.org/
 */

define([ 'dojo/_base/declare',
         'dijit/Dialog', 
         'dojo/i18n!./nls/HelloDialog' ],

function(declare, Dialog, i18n) {

	// create class
	var HelloDialog = declare([ Dialog ], {
		title : i18n.title,
		content : i18n.content
	});

	return HelloDialog;

});