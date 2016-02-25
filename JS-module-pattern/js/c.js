/**
 * http://usejsdoc.org/
 */

//(function() {
//
//	var mod = {
//		doWork : function() {
//			console.log('C...');
//		}
//	};
//
//	app.c = mod; // export
//
//})();


//------------------------------------

define('js/c', [], function() {
	
	
	var mod = {
		doWork : function() {
			console.log('C...');
		}
	};
	
	return mod;
	
});



