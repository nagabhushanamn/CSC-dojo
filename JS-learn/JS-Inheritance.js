/**
 * http://usejsdoc.org/
 */

/*
 * IN JS ,
 * 
 * we can implement 'prototype' based inheritance
 * 
 * 
 */

function Person(name, age) {
	this.name = name;
	this.age = age;
	// this.sayName=function(){
	// console.log('im '+this.name);
	// };
}
Person.prototype.sayName = function() {
	console.log('im ' + this.name);
};

var p1 = new Person('Nag', 32);
var p2 = new Person('Riya', 0.9);
// ....
p1.sayName();



var p11=Object.create(p1);
var p21={
		__proto__:p1
};

//console.log(p11.name);
p11.name='New nag';
console.log(p1.name);
console.log(p11.name);








