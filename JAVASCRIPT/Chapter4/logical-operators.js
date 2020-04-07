/* LOGICAL OPERATORS */

// Comparison operators usually return single values of true or false. Logical operators allow you to compare the results of more than one comparison operator.

let comparison = ((5 < 2) && (2 >= 3));

// Do expression 1 and expression 2 both evaluate to true? False.

&&; // --> LOGICAL AND: This operator tests more than one condition. If both expressions evaluate to true then it is true, if one of expression evaluate to false then it returns False.

||;// --> LOGICAL OR: This operator tests atleast one condition. if either of expression are true then it returns true else false.

!; // --> LOGICAL NOT: This operator takes a single Boolean value and inverts it. This reverse a state of expression.

/* *** USING LOGICAL AND *** */

let score1 = 8;
let score2 = 8;
let pass1 = 6;
let pass2 = 6;

// Check whether user passed both rounds, store reult in variable.
let passBoth = (score1 >= pass1) && (score1 >= pass2);

// Create Message.
let msg = "Both rounds passed: " + passBoth;

// Write the message into page.
let el = document.getElementById('answer');
el.textContent = msg;

/* *** USING LOGICAL OR and LOGICAL NOT *** */

let score1 = 8;
let score2 = 8;
let pass1 = 6;
let pass2 = 6;

// Check whether user passed one of two rounds, store results in variable.

let minPass = ((score1 >= pass1) || (score >= pass2));

// Create Message.
let msg = "Reset required: " + !(minPass);

// Write the message into the page.
let el = document.getElementById('answer');
el.textContent = msg;