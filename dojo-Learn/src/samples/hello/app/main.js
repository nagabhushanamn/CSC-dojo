/**
 * http://usejsdoc.org/
 */

define([ './HelloDialog','dojo/dom','dojo/on' ], function(HelloDialog,dom,on) {

	var dialog = new HelloDialog();
	
	// dialog.show();



	var showBtn=dom.byId('showBtn');
	
	on(showBtn,'click',function(){
		
		dialog.show();
		
		 setTimeout(function() {
			dialog.hide();
		}, 5000);
		 
	});
	
	
	
});