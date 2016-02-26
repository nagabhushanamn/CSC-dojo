/**
 * http://usejsdoc.org/
 */

define([ './my-module','./Person' ], function(mod,Person) {

	// console.log('main module loaded..');
	// //console.log(mod);
	// console.log('====================');
	// //mod();
	//	
	// mod.doCount();
	// mod.doCount();
	// mod.doCount();
	// mod.doCount();
	// mod.doCount();
	//	
	//	
	// console.log(mod.getCount());
	
	//-----------------------------------------------------
	
	var p1=new Person();
	p1.name='Nag';
	p1.sayName();
	
	var p2=new Person();
	p2.name='Riya';
	p2.sayName();
	
	

});