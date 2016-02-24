/**
 * http://usejsdoc.org/
 */


/**
 *  1. simple/primitive
 * 
 */

//--------------------------------------

// string

//var name="Nag";
//var selection='a';
//
//console.log(typeof name);
//console.log(typeof selection);

//--------------------------------------

// number

//var count=10;
//console.log(typeof count);
//var cost=12.12;
//console.log(typeof cost);

//--------------------------------------

// boolean

//var found=true;
//console.log(typeof found);

//--------------------------------------

// undefined
//
//var v;
//console.log(typeof v);

//--------------------------------------

// null

//var o=null;
//console.log(typeof o);
//console.log(o===null);

//---------------------------------------

//
//console.log("5"==5); // implicit conversion if 2 types are not equal
//console.log("5"===5);
//
//
//// Ques
//console.log(undefined==null);   // ?? --> true
//console.log(undefined===null);   // ?? --> false


//---------------------------------------

/**
 * 2. Reference Types  : objects
 * 
 * 
 */

/*
 *  --> in JS everything objects
 *  --> even 'function' also object
 * 
 *  obj ==> collection of 'key:value' pairs about 'anything'
 *  obj ==> hash
 * 
 * 
 *  how to create JS object ?
 *  
 *  syntax
 *  
 *  new CF();  // CF -> Constructor Function
 * 
 */

var person=new Object();
person.name='Nag';
person.age=32;
person.sayName=function(){
	console.log('im '+this.name);
};

//console.log(person.name);
person.sayName();

delete person.age;

console.log(person.age);



//---------------------------------------


/*
 * 
 *  some built-in types ( constructor functions )
 *  
 *  a. Object
 *  b. Array
 *  c. RegExp
 *  d. Function
 *  
 *  etc....
 * 
 */


// a. Object  

var person=new Object();
person.name='Nag';
person.age=32;
person.sayName=function(){
	console.log('im '+this.name);
};

// or  literal-style
var newPerson={
		name   :'Nag',
		age    :32,
		sayName:function(){
			console.log('im '+this.name);
		}
};

//-----------------------------------------------


// b. Array

var arr=new Array();
arr.push("red");
arr.push("green");
arr[2]="blue";

// or literal-style
var newArr=["red","green","blue"];



//-----------------------------------------------

// c. RegExp

var re=new RegExp("\\d");
//console.log(re.test("abc"));


// or literal style

var newRe=/\d/;
//console.log(newRe.test("1223435456"));


//-----------------------------------------------


var add=new Function("n1","n2","var result=n1+n2;return result;");
console.log(add(12,13));


// or literal style

function add(n1,n2){
	var result=n1+n2;
	return result;
}

console.log(add(12,13));


//-------------------------------------------------------

// How to access obj's properties ?

/* 
 *  2-ways
 *  
 *  --> '.' notation
 *  --> '[]' notation
 * 
 */

var person={
		'full-name':'Nagbhushanam',
		'age':32
};

console.log(person['full-name']);
console.log(person.age);
//console.log(person['age']);  // not good practice..



var prop='age';
console.log(person[prop]);



//----------------------------------------------------------



// Primitives as Objects


var name='nag';  // var name=new String('nag');
var newName=name.toUpperCase();
/*
 * var temp=new String(name);
 * var newName=temp.toUpperCase();
 * temp=null;
 * 
 */
console.log(newName);


//------------------------------------------------------------

/*
 *  In JS , falsy values are
 *  
 *  false,null,undefined,"",0
 * 
 */

// Ques

//var boo=new Boolean(false);  // never create primitives as objects
var boo=false;

if(boo){
	console.log('Now we go for lunch');
}else{
	console.log('we wont');
}


//------------------------------------------------------------


























