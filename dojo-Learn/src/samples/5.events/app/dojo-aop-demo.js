/**
 * http://usejsdoc.org/
 */

define([ 'dojo/aspect' ], function(aspect) {

	var comp = {
		getRandom : function(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
	};

	// ----------------------------------------------------------

	// AOP
	//	aspect.before(comp, 'getRandom', function(min, max) {
	//		// console.log('before advice...');
	//		console.log('finding... pls wait...');
	//		 console.log('original args :'+min+","+max);
	//		 return [min+10,max+10];
	//	});
	
	//	aspect.after(comp,'getRandom',function(result){
	//		console.log('original result :'+result);
	//		return result+100;
	//	});
	
	aspect.around(comp,'getRandom',function(originanFunc){
		return function(min,max){
			
			console.log('before original-func call..');
			if(min===max){
				console.log('Not calling original func..');
				return min;
			}else{
				var r=originanFunc(min,max);
				console.log('after original-func call...');
				return r;
			}
			
		};
	});

	// ----------------------------------------------------------

	// client module

	console.log(comp.getRandom(5, 20));
	console.log(comp.getRandom(5, 5));

});