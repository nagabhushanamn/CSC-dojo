/**
 * http://usejsdoc.org/
 */

//"use strict"

/*
 * IN JS , we can create functions in 2 -ways
 * 
 * 1. function declaration 
 * 2. function expression 
 * 
 */

// A. function declaration

// console.log(add(12,13));
//
// function add(n1,n2){
// return n1+n2;
// }

// console.log(add(12,13));



// B.function expression

//console.log(add(12,13)); // cant invoke before function expression

//var add=function f(n1,n2){return n1+n2;};
//console.log(add(12,13));
	
	
	
// -----------------------------------------------------------


// functions as values ( becoz they r internally objects )

//function sayHello(){
//	console.log('Hello....');
//}
//var sayHi=sayHello;  // func as value
//sayHi();



//-----------------------------------------------------------


// function as arguments

//function sayHello(greet){
//	if(greet){
//		greet();
//		return;
//	}
//	console.log('Hello...');
//}
//sayHello();
//sayHello(function(){console.log('ola....');});
//
////e.g
//
//
//var numArray=[1,3,5,7,9,2,4,6,8,10];
////var sortedArray=numArray.sort();
//var sortedArray=numArray.sort(function(a,b){return a-b;});
//console.log(sortedArray);


//-----------------------------------------------------------------

// function as return values

//function tng(){
//	console.log('tng.......');
//	function learn(){
//		console.log('learn....');
//	}
//	return learn;
//}
//
//var learnFunc=tng();
//learnFunc();
//learnFunc();


//-----------------------------------------------------------------

//function reflect(arg1){
	//console.log(arguments);
	//return arg1;
	//return arguments['0'];
//}
//console.log(reflect(12,13,14));
//console.log(reflect());

//e.g
//function sum(){
//	var r=0,
//	    len=arguments.length,
//	    i=0;
//	while(i<len){
//		r+=arguments[i];
//		i++;
//	}
//	return r;
//}
//
//console.log(sum(1,2,3,4,5,6,7,8,9,10));

//--------------------------------------------------------------

//function f(){
//	console.log('A..');
//}
//var f=new Function();


//function f(arg1){
//	console.log('B..');
//}
//var f=new Function();

//f();

//-----------------------------------------------------------------

// variable scope 
//---------------

/*
 *  JS- function
 *  
 *   --> variable 'hoisting' / lifting up is default def of JS-func
 * 
 */

	
//var v=100;  // Global scope
//
//function display(){
//	//var v=200; // Function scope
//	var v;
//	console.log(v);
//	v=200;
//}
//
//display();


//best practice : 
//while writing func , always follow 'single var design pattern ' refer above ex

//----------------------------------------------------------

//Ques
//

//function f(){
//	"use strict";
//	
//	{
//		let v=200;  // block scope  ( from ES6 spec )
//	}
//	console.log(v);
//	
//}
//
//f();

//---------------------------------------------------------------


//
//	function f(){
//		var k=200;
//	}
//	f();
//	
//	//console.log(k);
//	
	
//--------------------------------------------------------------


/**
 * 
 *  'this' keyword
 * 
 */

// why we need 'this' keyword ?

//var person={
//		name:'Nag',
//		sayName:function(){
//			console.log('im '+this.name);
//		}
//
//};
//
//var oldPerson=person;
//
//person={name:'Riya'};
//
//oldPerson.sayName();
//

//-------------------------------------------------------------

//global.name='GLOBAL';
//
//function sayNameForAll(){
//	console.log('im '+this.name);
//}
//
////var p1={name:'Nag',sayName:function(){console.log('im '+this.name);}};
////var p2={name:'Ria',sayName:function(){console.log('im '+this.name);}};
//
//var p1={name:'Nag',sayName:sayNameForAll};
//var p2={name:'Ria',sayName:sayNameForAll};
//
//sayNameForAll(); // im ??     // function-invocation pattern : ( this --> global-obj  )
//p1.sayName();    // im Nag    // method invocation           : ( this --> invoker-obj )
//p2.sayName();    // im Ria 
//
//

//-------------------------------------------------------------

// call/bind invocation patterns
//
//var util={
//		sayName:function(message,from){
//			console.log(message+' im '+this.name+"-"+from);
//		}
//};
//
////---
//
//var p1={name:'Nag'};
//var p2={name:'Ria'};
//
//// Eager
//util.sayName.call(p1,"Hello","BLR");   
//util.sayName.call(p2,"Hi","CHN");
//
//// Lazy invocation based on event
//var newF=util.sayName.bind(p1, "Ola","India");
//
//// on greet-event
//newF();
//
////on greet-event
//newF();
//
////on greet-event
//newF();


//----------------------------------------------------------

//
// // e.g need 1000+ person objects
//
function Person(name,age){
	this.name=name;
	this.age=age;
	this.sayName=function(){
		console.log('im '+this.name);
	};
}
//
//var p1=new Person('Nag', 32);   // constructor-invocation  ( this --> new-obj )
//var p2=new Person('Ria', 0.8);
////.....
//
//p1.sayName();
//p2.sayName();
//
//Person('Abc',100);  // imp-note : never invoke constructor func without 'new' keyword
//---------------------------------------------------------

/*
 * 
 *  IN JS , we can invoke function in 4 ways
 *  
 *  1. function-invocation   ( this --> global-obj  )
 *  2. method -invocation    ( this --> invoker-obj )
 *  3. call/bind-invocation  ( this --> arg-obj     )
 *  4. constructor-invocation( this --> new-obj     )
 * 
 */



//---------------------------------------------------------------------

//JS - Function 'Closure'


//
//function tng(){
//	
//	console.log('tng.....');
//	
//	var info='JS notes';
//	
//	function learn(){
//		console.log('learning with '+info);
//	}
//	
//	return learn;
//}
//
//
//var learnFunc=tng();
//
//console.log('---------------------------');
//
//learnFunc();
//learnFunc();
//learnFunc();

//-----------------------------------------------------------------------

// closure - practical example

 //e.g Counter-module

//function init(){
//	// private ( Encapsulation )
//	var count=0;
//	// public  ( Abstraction   )
//	return{
//		doCount:function(){
//			count++;
//		},
//		getCount:function(){
//			return count;
//		}
//		
//	};
//}
//var counter=init();
//---------------------------------------------------------

// IIFE ( Immediately Invokable Func Expression ) / SELF Executable func : pattern

var counter=(function(){
	
	// private ( Encapsulation )
	var count=0;
	// public  ( Abstraction   )
	return{
		doCount:function(){
			count++;
		},
		getCount:function(){
			return count;
		}
		
	};
	
})();

//-----------------------------------------------------------

counter.doCount();
counter.doCount();


console.log(counter.getCount());

































	
	
	
	