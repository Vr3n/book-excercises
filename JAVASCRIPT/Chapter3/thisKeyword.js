/* THIS KEYWORD */

// The keyword "this" is commonly used inside functions and objects. Where the function is declared alters what "this" means. It always refers to one object, usually the object in which the function operates.


/* Function in global scope: when a function is created at the top level of a script (that is, not inside another object or function), then it is in the global scope or global context. */

// The default object in this context is the window object, so when "this" is used inside a function in global context it refers to the window object.

function windowSize() {
	let width = this.innerWidth;
	let height = this.innerHeight;
	return [height, width];
}

// Global variables: All global variables also become properties of the window object, so when a function is in the global context, you can access global variables using the window object, as well as it's other properties.

let width = 600;
let shape = { width : 300 };

let showWidth = function() {
	document.write(this.width);
};

showWidth();