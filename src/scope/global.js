// variables

var a; // declare
var b = "b"; // declarate - initialize
b = "bb"; // reinitialize

var a = "aa"; //redeclare

//Global Scope
var fruit = "Apple"; // global

function bestFruit() {
	console.log(fruit);
}

bestFruit();

function countries() {
	country = "México"; // global
	console.log(country);
}

countries();
console.log(country);
