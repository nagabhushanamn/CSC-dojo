/**
 * http://usejsdoc.org/
 */

define(['dojo/_base/declare','dojo/_base/lang'],function(declare,lang){
	
	var Person=declare(null,{
		
		// instance-variable(s)
		name   :'unknown',
		age    :0,
		address:'universe',
		
		// constructor
		constructor:function(cArgs){
			console.log('Person::constructor invoked...');

			// if(name){
			// this.name=name;
			// }
			// if(age){
			// this.age=age;
			// }
			// if(address){
			// this.address=address;
			//}
			
			lang.mixin(this, cArgs);
		},
		
		// set/get
		
		// business method(s)
		sayName:function(){
			console.log("im "+this.name);
		}
		
	});
	
	return Person;
	
});