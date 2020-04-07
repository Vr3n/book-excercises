/* CREATING AN OBJECT: Constructor Notation */

/* The new keyword and the object constructor create a blank object. You can then add properties and methods to the object. */

let hotel = new Object();

hotel.name = 'Quay';
hotel.rooms = 40;
hotel.booked = 25;
hotel.checkAvailability = function() {
	return this.rooms - this.booked;
};

// To update the value of properties, use dot notation or square brackets. They work on objects created using literal or constructor notation. To delete a property, use the delete keyword.

hotel.name = "Park Avenue";

// You can also update the properties of an object (but not it's methods) using square bracket syntax. The object name is followed by squared brackets, and the property name is inside them.

hotel['name'] = 'Park Avenue';

// To delete a property, use the delete keyword followed by the object name and property name.

delete hotel.name;

// If you just want to clear the value of a property, you could set it to a blank string.
hotel.name = '';