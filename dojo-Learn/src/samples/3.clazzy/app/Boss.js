/**
 * http://usejsdoc.org/
 */

define(['dojo','./Employee'], function(dojo,Employee) {

	var Boss=dojo.declare([Employee],{
		
		constructor:function(){
			console.log('Boss::constructor invoked...');
		},
		askForRaise:function(){
			return this.inherited(arguments)+this.salary*0.2;
		}
		
	});
	
	return Boss;
	
});
