/**
 * http://usejsdoc.org/
 */
"use strict";

//var person={
//		name:'Nag'
//};

//--

// to check property existence

//if(person.name){
//	console.log('name property exist in person-obj');
//}
//
//// or
//
//if("name" in person){
//	console.log('name property exist in person-obj');	
//}

//------------------------------------------------

// enumurating js-obj properties

//var person={
//		name:'Nag',
//		age:32
//};
//
//for(var prop in person){
//	
//	if(person.hasOwnProperty(prop)){
//		console.log(prop+":"+person[prop]);
//	}
//	
//}
//

//------------------------------------------------


/*
 *  js-obj , we can have 2 types of properties
 *  
 *  a. data property
 *  b. accessor property
 * 
 */

//var person={
//		_name:'Nag', // data property
//		set name(newName){  // accessor property
//			console.log('set..');
//			if(newName){
//				this._name=newName;
//			}
//		},
//		get name(){
//			console.log("get..");
//			return this._name;
//		}
//};
//
//
////person._name='';
////console.log(person._name);
//
//person.name='New Nag';  // write
//console.log(person.name); // read


//--------------------------------------------------



//var person={name:'Nag'};
//Object.defineProperty(person, 'name', {configurable:false,writable:false});

//Object.defineProperty(person, 'name', {configurable:true});
//delete person.name;

//person.name='abc';

//console.log(person.name);

//---------------------------------------------------

var person={name:'Nag',age:32};
//Object.preventExtensions(person);
//Object.seal(person);
Object.freeze(person);   // immutable

//person.newProp="abc";
//delete person.name;
//person.name='...';




































