function greetings() {
	let username = "Efrén";
	function displayUsername() {
		return `Hello, ${username}!`;
	}
	return displayUsername;
}

const g = greetings();
console.log(g);
console.log(g());
