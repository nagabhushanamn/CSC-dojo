/**
 * http://usejsdoc.org/
 */

define(['dojo/_base/declare'],function(declare){
	
	/*
	 *  syntax - 'declare' usage
	 *  ------------------------
	 * 
	 *  declare(className,[base-class(s)],{class-body});
	 *  
	 *  className --> optional 
	 * 
	 * 
	 */
	
	var Person=declare(null,{
		name:'anonymous',
		age :0,
		sayName:function(){
			console.log("im "+this.name);
		}
	});
	
	return Person;
	
});