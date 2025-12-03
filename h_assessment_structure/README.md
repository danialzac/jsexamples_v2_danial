

# 📚 Find Your Hat — Pontianak Edition (Node.js Terminal Game)

This repository contains a spooky, beginner-friendly terminal game built with **JavaScript (Node.js)**. It applies core JavaScript concepts such as **OOP classes**, **arrays**, **control flow**, and **game loops**, while adding a fun twist:
a **Pontianak ghost (`G`)** that chases the player.

This README is purposely written in simple language to help **future you** remember how everything works.

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

**File:**

* `index.js`

### Objective

This section implements a simple **grid-based survival game** where the player (`*`) tries to find their hat (`^`) while avoiding holes (`O`) and a chasing ghost Pontianak (`G`).
It demonstrates how to combine **JavaScript logic**, **loops**, **arrays**, and **object-oriented programming** to produce an interactive terminal game.

---

## B — How to Run the Game

### 1. Install Dependencies

```
npm install
```

This installs `prompt-sync`, which allows keyboard input in the terminal.

### 2. Run the Game

```
node index.js
```

You will see the game map printed in your terminal.

---

## C — Game Rules

### Your goal:

✔ Find your hat (`^`)
✔ Avoid falling into holes (`O`)
✔ Do NOT let the Pontianak ghost (`G`) catch you
✔ Do not walk out-of-bounds

### Winning:

If you reach the hat tile:
`Congratulations, you won!`

### Losing:

You lose if:

* You step into a hole
* You walk off the map
* The ghost reaches your tile

---

## D — Controls

The game uses **WASD controls**, similar to many games:

| Key | Action     |
| --- | ---------- |
| `w` | move up    |
| `s` | move down  |
| `a` | move left  |
| `d` | move right |
| `q` | quit game  |

Each time you move, the ghost also moves.

---

## E — Ghost (Pontianak) Mechanics

The ghost (`G`) adds tension and storytelling.

### ✔ 1. Ghost Chases You

Each turn, the ghost moves **one tile closer to the player**.

### ✔ 2. Shriek Warning (Distance = 1 Tile)

If the ghost is RIGHT NEXT TO YOU:

```
HEEHEHEEHEHEHE!  A piercing shriek freezes your blood! She’s right beside you!...
```

This is your final warning.

### ✔ 3. Random Atmospheric Screams

Occasionally, the game prints a spooky line:

* “A distant scream echoes through the darkness...”
* “A woman's scream pierces the silence... HEEEEEEE!!!”
* “You hear a chilling howl from far away...”

These are **for storytelling only** — they don’t affect gameplay.

---

## F — Map Structure

The map is generated using:

```js
const ROWS = 15;
const COLS = 15;
```

Tiles:

| Symbol | Meaning         |
| ------ | --------------- |
| `*`    | player          |
| `^`    | hat (goal)      |
| `O`    | hole (danger)   |
| `░`    | grass (safe)    |
| `G`    | Pontianak ghost |

You can make the map bigger or smaller by changing ROWS and COLS.

---

## G — Code Structure

The game uses a **Field class**, which organizes the game into clear methods.

| Method            | Purpose                                 |
| ----------------- | --------------------------------------- |
| `generateField()` | Creates the 2D map grid                 |
| `setHat()`        | Places the hat randomly                 |
| `setGhost()`      | Places the ghost randomly               |
| `moveGhost()`     | Moves ghost toward the player           |
| `updateGame()`    | Handles player movement & consequences  |
| `ghostShriek()`   | Plays shriek if ghost is very close     |
| `ghostScream()`   | Random atmospheric storytelling screams |
| `start()`         | Runs the entire game loop               |

This structure helps beginners understand **OOP + logic flow** clearly.

---

## H — Learning Outcomes

By reviewing this project, you should understand:

### 1. **Basic OOP Concepts**

* Using a JavaScript class
* Creating methods inside classes
* Storing and updating object state (player position, ghost position)

### 2. **2D Array Manipulation**

* Representing a game map using nested arrays
* Updating and printing the grid each turn

### 3. **Control Flow**

* Using loops to keep the game running
* Using if/else and switch statements to handle movement logic

### 4. **User Input Handling**

* Accepting keyboard input via `prompt-sync`
* Processing each input as a game action

### 5. **Game Logic Design**

* Collision detection (holes, hat, ghost)
* Boundaries and out-of-bounds rules
* Turn-based movement

### 6. **Atmospheric Storytelling in Code**

* Adding shrieks and screams using simple random checks
* Enhancing player immersion without complicating logic

---

## I — Customization

### 💬 Change Map Size

Modify:

```js
const ROWS = 15;
const COLS = 15;
```

### 💬 Adjust Hole Difficulty

Change:

```js
const PERCENT = 0.2; // 20% holes
```

### 💬 Make Ghost Faster or Slower

Modify the logic in `moveGhost()`.

### 💬 Add More Sound Effects or Messages

Modify the arrays inside `ghostScream()`.

---

# 🎉 End of README

This project is designed to be fun, simple, and spooky — perfect for learning JavaScript while building a playable terminal game.

If you revisit this project in the future, this README should help you instantly understand how everything works again.

---

