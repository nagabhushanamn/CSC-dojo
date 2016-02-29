/**
 * http://usejsdoc.org/
 */

var products = [ {
	"name" : "Laptop",
	"price" : 2000,
	make : Date.now(),
	color : 'black',
	"descriptopn" : "New Model"
},

{
	"name" : "Mobile",
	"price" : 1000,
	make : Date.now(),
	color : 'white',
	"descriptopn" : "New Model"
} ];

console.log(JSON.stringify(products));