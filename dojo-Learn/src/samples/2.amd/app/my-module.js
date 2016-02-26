/**
 * http://usejsdoc.org/
 */

/*
 *  syntax
 *  -------
 *  
 *  define(mid,dependencies,factory);
 * 
 *  mid  --> package/module (optional)
 *  dependencies --> []   ( optional )
 *  factory      --> function
 * 
 */


//define(100);    
//define({value:1000});

define(function(){
	
	console.log('my-module loaded...');
	
	//return 100;
	//return {value:100};
	
	//-------------------------------------
	
	//	return function(){
	//		console.log('my-module func..');
	//	};
	
	//-------------------------------------
	
	// private
	var count=0;
	
	// public
	return {
		doCount:function(){
			count++;
		},
		getCount:function(){
			return count;
		}
	};
	
	//---------------------------------------
	
});









