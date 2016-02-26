/**
 * http://usejsdoc.org/
 */


define(['dojo'],function(dojo){
	
	var Parent=dojo.declare([],{
		'-chains-':{
			init:'after',
			destroy:'before'
		},
		constructor:function(){
			console.log('Parent::constructor..');
		},
		init:function(){
			console.log('Parent::init');
		},
		destroy:function(){
			console.log('Parent::destroy');
		}
	});
	
	var Child=dojo.declare([Parent],{
		constructor:function(){
			console.log('Child::constructor..');
		},
		init:function(){
			//this.inherited(arguments);
			console.log('Child::init');
		},
		destroy:function(){
			console.log('Child::destroy');
			//this.inherited(arguments);
		}
	});
	
	
	var child=new Child();
	
	child.init();
	child.destroy();
	
});