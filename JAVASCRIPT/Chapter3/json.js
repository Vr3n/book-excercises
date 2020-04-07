/* JSON - Javscript Object notation 

--	IN AN OBJECT: Variables Become known as properties. if a variable is part of an object, it is called property.

--	IN AN OBJECT: Functions become known as methods: if a function is part of an object, it is called a method.
			      Methods represent tasks that are associated with the object. 
*/


let hotel = {
	name : "Quay",
	rooms : 40,
	booked : 25,
	gym : true,
	roomTypes: ['twin', 'double', 'suit'],
	checkAvailibility : function() {
		return this.rooms - this.booked;
	}
};

// Accessing the members of an object using "DOT/MEMBER" operator.

let hotelName = hotel.name;
let checkAvailibility = hotel.checkAvailibility();

// You can also put them in page using selectors.
let hName = document.getElementById('hotename');
hName.textContent = hotel.name;

let rooms = document.getElementById('rooms');
rooms.textContent = hotel.checkAvailibility();