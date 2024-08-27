function toCase(text) {
  // write your code 
	let res = (text.toLowerCase() + "-" + text.toUpperCase());
	return res;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
