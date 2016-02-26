/**
 * http://usejsdoc.org/
 */

define(['dojo',
        './Person',
        'dojo/_base/lang'],
		
function(dojo,Person,lang){
	
	
	var Employee=dojo.declare([Person],{
		salary:1000,
		constructor:function(cArgs){
			console.log('Employee::constructor invoked...');
			lang.mixin(this,cArgs);
		},
		askForRaise:function(){
			return this.salary*0.02;
		}
	});
	
	return Employee;
	
});