// Method of an Object: when a function is defined inside an object, it becomes a method. In a method, this refers to the containing object.

// In the Example below, the getArea() method appears inside the shape objectm so `this` refers to the shape object it is contained in.

let shape = {
	width: 600,
	height: 400,
	getArea: function() {
		return this.width * this.height;
	};
};

// Becaise the `this` keyword here refers to the shape object, it would be the same as writing:

return shape.width * shape.height;

// FUNCTION EXPRESSION AS METHOD: if a named function has been defined in global scope, and it is then used as a method of an object, `this` refers to the object it is contained within.

// The next example uses the same showWidth() function expression as the one on the left-hand page, but it is assigned as a method of an object.


let width = 600;
let shape = { width: 300 };

let showWidth = function () {
	document.write(this.width);
};

shape.getWidth = showWidth; // The show width method is used with shape object.
shape.getWidth(); // Creates instance of getWidth function which hits showWidth then `this.width` refers to width key of shape object.