/* Creating Many objects: Constructor notation */

// Sometimes you will want several objects to represent similar things. Object constructors can use a function as a template for creating objects. First, Create the template with the object's properties and methods.

// A function called `hotel` will be used as a template for creating new objects that represent hotels. like all functions, it contains statements. In this case, they add properties or methods to the object.


function Hotel(name, rooms, booked) {
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;
	this.checkAvailability = function() {
		return this.rooms - this.booked;
	};
};

/* The 'this' keyword is used instead of the object name to indicate that the property or method belongs to the object that this function created. Each statement that creates a new property or method for this object ends in a semicolon.

/* The UPPERCASE letter is supposed to help remind developers to use the new keyboard when they create an object using that function. */