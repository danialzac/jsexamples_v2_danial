const prompt = require("prompt-sync")({ sigint: true });

/* ================================
   GAME SYMBOLS (map tiles)
   ================================ */
const GRASS = '░';   // safe ground
const HOLE = 'O';    // fall = lose
const HAT = '^';     // goal = win
const PLAYER = '*';  // your character

/* ================================
   PLAYER CONTROLS (WASD keys)
   ================================ */
// TODO: UP / DOWN / LEFT / RIGHT / QUIT keyboard constants
const UP = "w";
const DOWN = "s";
const LEFT = "a";
const RIGHT = "d";
const QUIT = "q";

/* ================================
   TEXT MESSAGES
   ================================ */
// TODO: MSG_UP / MSG_DOWN / MSG_LEFT / MSG_RIGHT / MSG_QUIT / MSG_INVALID
const MSG_UP = "You moved up.";
const MSG_DOWN = "You moved down.";
const MSG_LEFT = "You moved left.";
const MSG_RIGHT = "You moved right.";
const MSG_QUIT = "You quit the game.";
const MSG_INVALID = "Invalid entry.";
const MSG_WELCOME =
  "\n************\nWelcome to Find Your Hat Game\n*********\n";

/* ================================
   RESULT MESSAGES
   ================================ */
// DONE: WIN / LOSE / OUT / QUIT messages constants
const WIN = "Congratulations, you won!";
const LOSE = "You fell into a hole, you lost!";
const OUT = "You went out-of-bounds, you lost!";

/* ================================
   MAP SETTINGS
   ================================ */
// DONE: MAP ROWS, COLUMNS AND PERCENTAGE
const ROWS = 10;
const COLS = 10;
const PERCENT = 0.2;


/* ================================
   FIELD CLASS (core game logic)
   ================================ */
class Field {

  /* ---------------------------------
     DONE: constructor
     --------------------------------- */
  constructor(field = null) {
    this.field = field;
    this.gamePlay = false;
    this.playerPosition = { x: 0, y: 0 };
  }

  /* ---------------------------------
     DONE: generateField()
     create random map
     --------------------------------- */
  static generateField(rows = 8, cols = 8, percent = PERCENT) {
    const map = [];

    for (let row = 0; row < rows; row++) {
      map[row] = [];

      for (let col = 0; col < cols; col++) {
        map[row][col] =
          Math.random() > percent ? GRASS : HOLE;
      }
    }

    return map;
  }

  /* ---------------------------------
     DONE: welcomeMessage()
     --------------------------------- */
  static welcomeMessage(msg) {
    console.log(msg);
  }

  /* ---------------------------------
     DONE: setHat()
     place hat randomly on map
     --------------------------------- */
  setHat() {
    const xHat = Math.floor(Math.random() * (ROWS - 1)) + 1;
    const yHat = Math.floor(Math.random() * (COLS - 1)) + 1;

    this.field[xHat][yHat] = HAT;
  }

// DONE: printField displays the updated status of the field
printField(){
  this.field.forEach((row) => {
    console.log(row.join(""));
  })
}


// TODO: updateMove displays the move (key) entered by the user

// !! TODO: updateGame Assessment Challenge


  //  DONE: start() a method of the class to start the game
  start(){
    // immediate-left and immediate-right, immediate-top and immediate-bottom is blocked
    //if(hatBlocked(this.field) && !this.gamePlay)  
    // this.field = Field.generateField();

    this.gamePlay = true;       // start the game
    this.field[0][0] = PLAYER;  // positioning the player on the field, based on player's default position
    this.setHat();              // the postion of the Hat

    
    this.printField();          // print the formatted field


    do{

    }while (condition);
  }

  /* ---------------------------------
     TODO: updateMove()
     displays message based on key input
     --------------------------------- */

  /* ---------------------------------
     TODO: updateGame()
     (Assessment Challenge)
     handles win/lose conditions
     --------------------------------- */

  /* ---------------------------------
     DONE: start()
     prepare the game
     --------------------------------- */
  start() {
    this.gamePlay = true;
    this.field[0][0] = PLAYER;

    const xHat = Math.floor(Math.random() * (ROWS - 1)) + 1;
    const yHat = Math.floor(Math.random() * (COLS - 1)) + 1;

    this.field[xHat][yHat] = HAT;
  }

} // END OF CLASS



/* ================================
   GAME SETUP (main flow)
   ================================ */

// DONE: Generate a random new field
const gameField = Field.generateField(ROWS, COLS, PERCENT);

// DONE: Print welcome message
Field.welcomeMessage(MSG_WELCOME);

// DONE: Create the game instance
const game = new Field(gameField);

// DONE: Start the game
game.start();
