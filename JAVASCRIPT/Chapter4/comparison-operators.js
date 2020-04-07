/* *** USING COMPARISON OPERATORS *** */

let pass = 50; // Passing Mark
let score = 90; // Score

// Check if the user has passed.
let haspassed = score >= pass;

// Write the message into the page.
let el = document.getElementById('answer');
el.textContent = 'Level Passed' + hasPassed;



/* *** USING EXPRESSIONS WITH COMPARISON OPERATORS *** */

((score1 + score2) > (highScore1 + highScore2))


let score1 = 90;
let score2 = 95;
let highScore1 = 75;
let highScore2 = 95;

// Check if scores are higher than current high scores.
let comparison = (score1 + score2) > (highScore1 + highScore2);

// Write the message into the page.

let el = document.getElementById('answer');
el.textContent = "New High Score: " + comparison;