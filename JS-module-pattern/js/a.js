/**
 * http://usejsdoc.org/
 */

//(function() {
//	
//	app.b.doWork();
//
//	var mod = {
//		doWork : function() {
//			console.log('A...');
//		}
//	};
//
//	app.a = mod;  // export
//
//})();


//------------------------------------

define('js/a', [ 'js/b'], function(b) {
	
	//c.doWork();
	b.doWork();
	
	var mod = {
		doWork : function() {
			console.log('A...');
		}
	};
	
	return mod;
});












