function greetings() {
	let userName = "Efrén";
	console.log(userName);

	if (userName === "Efrén") console.log(`Hello ${userName}!`);
}

greetings();

/* If we don't use the keyword 'let', 'var' or 'const' when declaring a variable, this will be treated as a global variable, in this example, the variable is declared with let inside the function, so the variable's scope will be in a function, meaning that the console.log  on the line 12 will break the execution of the program because 'userName' is not defined*/

console.log(userName);
