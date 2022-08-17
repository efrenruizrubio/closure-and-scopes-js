var firstName; // undefined
firstName = "Efrén";
console.log(firstName);

var lastName = "Ruíz";
lastName = "Rubio";
console.log(lastName);

var secondName = "Efraín"; // Declaring - initializing
var secondName = "Ameno"; // Redeclaring
console.log(secondName);

// The variables declared with let and const can't be redeclared

// let
let fruit = "Apple"; // Declare and initialize
fruit = "Kiwi"; // Reinitialize
console.log(fruit);
// let fruit = "Banana";

// const variable can't be assigned a different value than the one at the initialization
const animal = "Dog";
/* animal = "Cat"; */
/* const animal = "Snake"; */
console.log(animal);

/* Data structures, such as arrays or objects, that are declared with 'const' can change the referencies of their elements, this concept is known as mutability. However, it has the same rules, it's impossible to redeclare and reinitialize a data structure variable.  */

const vehicles = [];
vehicles.push("Honda");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);
