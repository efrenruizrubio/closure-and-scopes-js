/*
    When we use a variable when it hasn't been declared, JS will declare the variable like this: var nameOfDog; And we will see undefined on the console.log, this happens because JS assigns the value 'undefined' to variables that have been not initialized. Hoisting on variables only happens when whe declare it with var, and also, only happens on the functions that are declarative. If we use expressive functions, like arrow functions or anonymous functions, the hoisting won't happen and we will get an error if we try to access the function before initializing it.
*/

/* console.log(nameOfDog);
var nameOfDog = "Tommy";
console.log(nameOfDog); */

nameOfDog();

function nameOfDog() {
	console.log(`The best dog is: ${dog}`);
}

var dog = "Tommy";

nameOfDog();
