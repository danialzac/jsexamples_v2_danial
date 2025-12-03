# 🎩 Find Your Hat — Pontianak Edition  
// DONE: A simple, spooky terminal game built using Node.js and JavaScript fundamentals  


---

# 📘 Table of Contents  
  
1. [A — Overview](#a--overview)  
2. [B — How to Run the Game](#b--how-to-run-the-game)  
3. [C — Game Rules](#c--game-rules)  
4. [D — Controls](#d--controls)  
5. [E — Ghost (Pontianak) Mechanics](#e--ghost-pontianak-mechanics)  
6. [F — Map Structure](#f--map-structure)  
7. [G — Code Structure](#g--code-structure)  
8. [H — Learning Outcomes](#h--learning-outcomes)  
9. [I — Customization](#i--customization)

---

# 🧩 Sections  

## A — Overview  
// FILE: index.js  
// OBJECTIVE: Explain what this game is and why it exists  

This is a grid-based JavaScript game played in the terminal.  
You control the player (`*`) and must find your hat (`^`) while avoiding:

- Holes (`O`)  
- The ghost Pontianak (`G`)  
- Falling off the map  

The map is randomly generated each time.

The ghost chases you.  
The ghost shrieks.  
The ghost screams randomly for storytelling.

(Yes, it’s spooky but still simple.)

---

## B — How to Run the Game  
// IMPORTANT: Must run inside a Node environment

### // STEP 1 — Install Dependencies  
```bash
npm install
// STEP 2 — Run the Game
node index.js
// RESULT
You will see the map printed in your terminal, ready to play.
C — Game Rules
// DONE: Simple explanation for future reference
// YOUR GOAL
Reach the hat (^)
Stay alive
Outrun the Pontianak
Avoid holes
// WIN CONDITION
Touch the hat →
Congratulations, you won!
// LOSE CONDITIONS
Fall into a hole
Walk outside the map
Let the ghost catch you
(It WILL catch you if you don’t move smart)
D — Controls
// DONE: Classic WASD movement
Key	Action
w	move up
s	move down
a	move left
d	move right
q	quit game
// NOTE: Every move you make → the ghost also moves.
E — Ghost (Pontianak) Mechanics
// DONE: Keep simple and obvious
// 1. CHASE LOGIC
The ghost always moves one tile closer to you every turn.
// 2. SHRIEK WARNING (Distance = 1 tile)
If she’s VERY close:
HEEHEHEEHEHEHE! A piercing shriek freezes your blood! She’s right beside you!...
// IMPORTANT: This scream means danger level = MAX.
// 3. RANDOM STORY SCREAMS
These are “for fun and vibes”:
“A distant scream echoes through the darkness…”
“A haunting wail drifts across the wind…”
“A woman's scream pierces the silence... HEEEEEEE!!!”
// NOTE: These do NOT affect gameplay.
F — Map Structure
// DONE: Explain the symbols in a friendly way
The map uses:

Symbol	Meaning
*	You (the player)
^	Your hat (your goal)
O	Holes (avoid these)
░	Grass (safe)
G	Pontianak ghost
// MAP SIZE (NORMAL MODE)
const ROWS = 15;
const COLS = 15;
// NOTE: Increase for exploration, decrease for panic.
G — Code Structure
// DONE: Easy-to-read breakdown of major methods
// CLASS: Field
Handles everything about the game.
// KEY METHODS
Method	Purpose
generateField()	Creates the 2D map
setHat()	Places the hat somewhere
setGhost()	Places the ghost somewhere
moveGhost()	Ghost chases the player
updateGame()	Handles player movement logic
ghostShriek()	Shriek when ghost is extremely close
ghostScream()	Random storytelling screams
start()	Main game loop
// NOTE: This is beginner-friendly OOP usage.
H — Learning Outcomes
// DONE: What I learn by building this game
1. JavaScript Classes
How to store state & behaviour in a class.
2. 2D Arrays
How grids work and how to update them.
3. Control Flow
Using if, switch, and loops to control game behaviour.
4. User Input Handling
Using prompt-sync for live terminal input.
5. Game Logic
Detecting:
Boundaries
Collisions
Winning
Losing
“Chasing” logic
6. Simple Storytelling in Code
Using random messages to create atmosphere with minimal code.
I — Customization
// NOTE: Easy tweaks for future fun
// MAP SIZE
const ROWS = 15;
const COLS = 15;
// HOLE PERCENTAGE
const PERCENT = 0.2;
// GHOST SPEED
Modify moveGhost().
// SCREAMS & SHRIEKS
Add or remove messages in:
ghostShriek()
ghostScream()
// WANT MORE FEATURES?
Ideas for future you:
Add a second ghost
Items to pick up
Fog-of-war (hidden map)
Teleporting hat
Power-ups
Boss ghost mode
// END OF README