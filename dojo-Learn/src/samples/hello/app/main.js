/**
 * http://usejsdoc.org/
 */

define(['app/HelloDialog'],function(HelloDialog){
	
	var dialog=new HelloDialog();
	dialog.show();
	
	setTimeout(function() {
		//dialog.hide();
	}, 5000);
	
});