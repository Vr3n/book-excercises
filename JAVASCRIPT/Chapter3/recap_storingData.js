/* In Javascript, data is represented using name/value pairs. To organize your data, you can use an array or object to group a set of related values. In arrays and objects the name is also shown as a key. */

// VARIABLES: a variable has just one key (the variable name) and one value.

let hotel = "Quay";

//******** ARRAYS ***********: Arrays can store multiple pieces of information. Each piece of information is seperated by a comma. The order of the values is important because items in an array are assigned a number (called an index).
// Values in an array are put in square brackets, seperated by commas.

let hotels = [
	'Quay',
	'Park',
	'Beach',
	'Bloomsburry'
]

// Retrieving an item from array using it's index number:
hotels[1];

// IF You want to access items via a property name or key, use an object (note that each key in the object must be unique).
// if order of the items is important, use an array.

// ****** INDIVIDUAL JS OBJECTS ********* : objects store sets of name/value pairs. They can be properties (variables) or methods (functions).

// YOu access each piece of data by it's key.

let hotel = {
	name: 'Quay',
	rooms: 40
};

// Objects created with literal notation are good: 1. When you are storing/transmitting data between applications, 2. For global or configuration objects that setup information for page.

// Retrieving values with `Dot` notation.
hotel.name;


/* *************** MULTIPLE JS OBJECTS ******************* */

// When you need to create multiple objects within the same page, you should use an object constructor to provide a template for the objects.

function Hotel(name, rooms) {
	this.name = name;
	this.rooms = rooms;
}

// Then you can create instances of the object using the new keyword and then a call to the constructor function.

let hotel1 = new Hotel('Quay', 40);
let hotel2 = new Hotel('Park', 120);


// Objects created with constructors are good when: 1. you have lots of objects used with similar functionality (e.g multiple slideshows / media players / game characters) within a page, 2. A complex object migth not be used in code.

// Accessing the objects methods / properties using `dot` notation.

hotel2.name;
hotel1.rooms;