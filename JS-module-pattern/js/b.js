/**
 * http://usejsdoc.org/
 */

//(function() {
//
//	var mod = {
//		doWork : function() {
//			console.log('B...');
//		}
//	};
//	
//	app.b = mod;  // export
//
//})();

//----------------------------

define('js/b', [], function() {
	
	
	var mod = {
		doWork : function() {
			console.log('B...');
		}
	};
	
	return mod;
	
});


