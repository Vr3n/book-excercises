/* Evaluating Conditions & Conditional Statements */

// There are two components to a descision: 1. An expression is evaluated, which returns a value, 2: A conditional statement says what to do in a given solution.

// Conditional Statements: A conditional statment is based on a concept of if/else/else; if condition is met, then your code executes one or more statements, else your code does something different.

// EXAMPLE:

if (score > 50) {
	document.write("You passed!");
} else {
	document.write("You failed! Try again ...");
}

/* *** COMPARISON OPERATORS: EVALUATING CONDITIONS *** */

// You can evaluate a situation by comparing one value in the script to what you expect it migth be. The result will be a boolean: True or False.

==  // Equal to --> Compares two values to see if they're same.

!= // Not Equal to --> Compares two values to see if they're not the same.

=== // Strict Equal to --> This operator compares two values to check that both data type and value are same.

'3' === 3 // --> False

'3' === '3' // --> True

!== // Strict not Equal to --> This operator compares two values to check that both data type and value are not same.

"3" !== 3 // --> True

"3" === 3 // --> True

> // Greater than

< // Less than

>= // Greater than equal to

<= // Less than equal to