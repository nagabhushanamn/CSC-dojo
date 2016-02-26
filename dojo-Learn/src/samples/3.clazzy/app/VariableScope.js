/**
 * http://usejsdoc.org/
 */

define([ 'dojo', 'dojo/_base/lang' ], function(dojo, lang) {

	var Person = dojo.declare([], {

		// instance var

		name : '',
		count : 0,
		favFood : null,  // must initialize in constructor bcoz it is Reference Type

		constructor : function(cArgs) {
			this.favFood = [];  
			lang.mixin(this, cArgs);
		},
		sayName : function() {
			this.count++;
			Person.totalCount++;
			console.log("im " + this.name);
		},
		addFavFood : function(food) {
			this.favFood.push(food);
		}

	});

	// static var scope
	Person.totalCount = 0; 

	return Person;

});