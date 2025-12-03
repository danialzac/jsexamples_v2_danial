
//COMPLETED FIND MY HAT HAT GAME
const prompt = require("prompt-sync")({ sigint: true });

// DONE: Game elements/assets constants
const GRASS = '░';
const HOLE = 'O';
const HAT = '^';
const PLAYER = '*';

// DONE: UP / DOWN / LEFT / RIGHT / QUIT keyboard constants
const UP = "w";
const DOWN = "s";
const LEFT = "a";
const RIGHT = "d";
const QUIT = "q";

// DONE: MSG_UP / MSG_DOWN / MSG_LEFT / MSG_RIGHT / MSG_ QUIT / MSG_INVALID / MSG_WELCOME message constants
const MSG_UP = "You moved up.";
const MSG_DOWN = "You moved down.";
const MSG_LEFT = "You moved left.";
const MSG_RIGHT = "You moved right.";
const MSG_QUIT = "You quit the game.";
const MSG_INVALID = "Invalid entry.";
const MSG_WELCOME = "\n**********************************\nWelcome to Find Your Hat Game\n**********************************\n";

// DONE: WIN / LOSE / OUT messages constants
const WIN = "Congratulations, you won!";
const LOSE = "You fell into a hole, you lost!";
const OUT = "You went out-of-bounds, you lost!";

// DONE: MAP ROWS, COLUMNS AND PERCENTAGE
const ROWS = 10;
const COLS = 10;
const PERCENT = 0.2;  // variable that set the % of randomisation of holes in game field to 20%

class Field {
  /**
   * DONE: constructor, a built-in method of a class (invoked when an object of a class is instantiated)
   * @param {Array} field - field is passed in as an Array to populate the property field of this class' instance
   */
  constructor(field = null){
    this.field = field;                 
    this.gamePlay = false;              // game is by default = false
    this.playerPosition = {x: 0, y:0};  // player position is by default {x:0, y:0}
  }

  /**
   * DONE: generateField is a static method, returning a 2D array of the fields
   * @param {Number} rows     - rows for the field  
   * @param {Number} cols     - cols for the field
   * @param {Number} percent  - percentage of random holes
   * @returns {Array}         - 2D array to be used by the instance of the game 
   */
  static generateField(rows = 8, cols = 8, percent = 0.1 ){

    const map = new Array();

    // generate fields by rows and cols passed in
    for (let row = 0; row < rows; row++) {                      // for each row
      map[row] = new Array();                                   // create a new array

      for (let col = 0; col < cols; col++) {                    // for each col
        map[row][col] = Math.random() > percent ? GRASS : HOLE; // use Math.random() to randomise the holes in the map
      }
    }

    return map;
  }

  /**
   * DONE: welcomeMessage is a static method, displays a string
   * @param {String} msg - is a string value to print out to the user at the start of the game
   */
  static welcomeMessage(msg){
    console.log(msg);
  }

  // DONE: setHat positions the hat along a random x and y position within field array
  setHat(){
    const xHat = Math.floor(Math.random() * (ROWS - 1)) + 1; // (0 to 3) + 1, therefore, my min x = 1
    const yHat = Math.floor(Math.random() * (COLS - 1)) + 1; // (0 to 3) + 1, therefore, my min y = 1
    
    this.field[xHat][yHat] = HAT;
  }

  // DONE: printField displays the updated status of the field
  printField(){
    this.field.forEach((row) => {
      console.log(row.join(""));
    })
  }

  // DONE: updateMove displays the move (key) entered by the user
  /**
   * @param {String} m - passes in the value representing the player's move
   * @returns 
   */
  updateMove(m = ""){
    if(m===UP) return console.log(MSG_UP);            // Tell user he move up
    if(m===DOWN) return console.log(MSG_DOWN);        // Tell user he move down
    if(m===LEFT)return console.log(MSG_LEFT);         // Tell user he move left
    if(m===RIGHT)return console.log(MSG_RIGHT);       // Tell user he move right
    if(m===QUIT)return console.log(MSG_QUIT);         // Tell user he quit the game
    return console.log(MSG_INVALID);                  // Tell user he entered an invalid value
  }

  /**
   * DONE updateGame Assessment Challenge
   * @param {*} m accept the value of the player's move (UP|DOWN|LEFT|RIGHT)
   */
  updateGame(m = ""){
    // capture the player's currX and currY postion first
    const oldX = this.playerPosition.x;     // current x-position of player
    const oldY = this.playerPosition.y;     // current y-position of player

    // by default, new positions = old positions
    let newX = oldX;  
    let newY = oldY;

    // update the new coordinates based on player movement
    if(m === UP) newX--;         // player moves upward 1 row
    if(m === DOWN) newX++;       // player moves downward 1 row
    if(m === LEFT) newY--;       // player moves left by 1 column
    if(m === RIGHT) newY++;      // player moves right by 1 column

    // if player x and y postion is out of the map
    if (newX < 0 || newX >= ROWS || newY < 0 || newY >= COLS) {
      console.log(OUT);          // notify player that he went out of bounds
      this.gamePlay = false;     // stop the game
      return;                    // exit function
    }

    // read what is currently on the new tile
    const tile = this.field[newX][newY];

    // if the player x and y position is a HOLE
    if (tile === HOLE) {
      console.log(LOSE);         // notify losing state
      this.gamePlay = false;     // stop the game
      return;                    // exit function
    }

    // if the player x and y position === x and y of the HAT (^)
    if (tile === HAT) {
      console.log(WIN);          // notify winning state
      this.gamePlay = false;     // stop the game
      return;                    // exit function
    }

    // otherwise, move the player to the new x and y position based on move
    this.field[oldX][oldY] = GRASS;   // restore old tile to grass
    this.field[newX][newY] = PLAYER;  // place player on new tile

    // update player's stored position to new coordinates
    this.playerPosition.x = newX;
    this.playerPosition.y = newY;
  }

  // DONE: start() a method of the class to start the game
  start(){
    this.gamePlay = true;       // start the game
    this.field[0][0] = PLAYER;  // positioning the player on the field, based on player's default position
    this.setHat();              // the postion of the Hat
    
    // while gamePlay === true, track player moves and updates
    do {
      
      this.printField();        // print the formatted field
      const input = prompt("(w)up, (s)down, (a)left, (d)right, (q)exit: ");      

      switch (input.toLowerCase()) {
        case UP:
          this.updateMove(UP);
          break;
        case DOWN:
          this.updateMove(DOWN);
          break;
        case LEFT:
          this.updateMove(LEFT);
          break;
        case RIGHT:
          this.updateMove(RIGHT);
          break;
        case QUIT:
          this.updateMove(QUIT);
          break;
        default:
          this.updateMove();    // represents invalid entry
          break;
      }

      if(input === QUIT)
        this.gamePlay = false;  
      
      this.updateGame(input);

    } while (this.gamePlay);
  }
}

// DONE: Generate a new field - using Field's static method: generateField
const gameField = Field.generateField(ROWS, COLS, PERCENT);

// DONE: Generate a welcome message
Field.welcomeMessage(MSG_WELCOME);

// DONE: Create a new instance of the game
const game = new Field(gameField);

// DONE: Invoke method start(...) from the instance of game object
game.start();
