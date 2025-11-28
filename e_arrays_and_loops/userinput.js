/*  

// Load the prompt-sync package so we can ask the user questions
const prompt = require("prompt-sync")({ sigint: true });

// Ask the user for their name
let getName = prompt("Please enter your name? ");

// --- WHILE LOOP SECTION ---
// Keep asking until user types something
while (getName === "") {          // If name is empty (user pressed Enter)
    getName = prompt("Please enter your name? ");   // Ask again
}

// Print welcome message
console.log(`Welcome, ${getName}`);


// --- DO/WHILE LOOP SECTION ---
// This loop does the SAME thing, but runs once before checking
let getName2;                      // Create a new variable

do {
    // Ask the user for their name (runs at least once)
    getName2 = prompt("Please enter your name: ");
} while (getName2 === "");         // Keep looping only if empty

// Print welcome message using the second input
console.log(`Welcome, ${getName2}`);

*/




/// Game input controls
const prompt = require("prompt-sync")({ sigint: true });

const UP = "w";
const DOWN = "s";
const LEFT = "a";
const RIGHT = "d";
const QUIT = "q";

let move = "";

do {
    // Ask user for input
    move = prompt("(w)up, (s)down, (a)left, (d)right, (q)exit: ");

    // Convert input to lowercase (IMPORTANT!)
    switch (move.toLowerCase()) {

        case UP:
            console.log("You moved UP");
            break;

        case DOWN:
            console.log("You moved DOWN");
            break;

        case LEFT:
            console.log("You moved LEFT");
            break;

        case RIGHT:
            console.log("You moved RIGHT");
            break;

        case QUIT:
            console.log("You QUIT the game");
            break;

        default:
            console.log("Invalid input! Try again.");
    }

} while (move.toLowerCase() !== QUIT);
