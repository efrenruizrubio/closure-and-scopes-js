function fruits() {
	if (true) {
		var fruit1 = "Apple";
		let fruit2 = "Kiwi";
		const fruit3 = "Banana";
	}

	/*
    
    When a variable is declared with the keyword 'var', the scope for that variable will be always global, but with the release of ES6, we have the keywords 'let' and 'const', and in this example, the variables assigned with this keywords will have a block scope.

    */
	console.log(fruit1);
	console.log(fruit2);
	console.log(fruit3);
}

fruits();
