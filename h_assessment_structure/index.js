
//COMPLETED FIND MY HAT HAT GAME
const prompt = require("prompt-sync")({ sigint: true });

// DONE: Game elements/assets constants
const GRASS = '░';
const HOLE = 'O';
const HAT = '^';
const PLAYER = '*';
const GHOST = 'G';               // NEW: ghost element

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
const GHOST_CAUGHT = "The ghost caught you! You lost!";  
const GHOST_SHRIEK = "HEEHEHEEHEHEHE!  A piercing shriek freezes your blood! She’s right beside you!...";  // NEW shriek message

// DONE: MAP ROWS, COLUMNS AND PERCENTAGE
const ROWS = 15;   // NORMAL difficulty size
const COLS = 15;   // NORMAL difficulty size
const PERCENT = 0.2;

class Field {

  constructor(field = null){
    this.field = field;
    this.gamePlay = false;
    this.playerPosition = {x: 0, y:0};

    this.turns = 0;

    this.ghostPosition = {x: 0, y: 0};   // NEW: track ghost position
  }

  static generateField(rows = 8, cols = 8, percent = 0.1 ){
    const map = new Array();

    for (let row = 0; row < rows; row++) {                      
      map[row] = new Array();                                   

      for (let col = 0; col < cols; col++) {                    
        map[row][col] = Math.random() > percent ? GRASS : HOLE; 
      }
    }

    return map;
  }

  static welcomeMessage(msg){
    console.log(msg);
  }

  setHat(){
    const xHat = Math.floor(Math.random() * (ROWS - 1)) + 1;
    const yHat = Math.floor(Math.random() * (COLS - 1)) + 1;
    
    this.field[xHat][yHat] = HAT;
  }

  /**
   * NEW: setGhost positions the ghost randomly on grass
   */
  setGhost(){
    let x, y;
    do {
      x = Math.floor(Math.random() * ROWS);
      y = Math.floor(Math.random() * COLS);
    } while (this.field[x][y] !== GRASS);

    this.field[x][y] = GHOST;
    this.ghostPosition.x = x;
    this.ghostPosition.y = y;
  }

  printField(){
    this.field.forEach((row) => {
      console.log(row.join(""));
    })
  }

  updateMove(m = ""){
    if(m===UP) return console.log(MSG_UP);
    if(m===DOWN) return console.log(MSG_DOWN);
    if(m===LEFT)return console.log(MSG_LEFT);
    if(m===RIGHT)return console.log(MSG_RIGHT);
    if(m===QUIT)return console.log(MSG_QUIT);
    return console.log(MSG_INVALID);
  }

  updateGame(m = ""){
    const oldX = this.playerPosition.x;
    const oldY = this.playerPosition.y;

    let newX = oldX;  
    let newY = oldY;

    if(m === UP) newX--;
    if(m === DOWN) newX++;
    if(m === LEFT) newY--;
    if(m === RIGHT) newY++;

    if (newX < 0 || newX >= ROWS || newY < 0 || newY >= COLS) {
      console.log(OUT);
      this.gamePlay = false;
      return;
    }

    const tile = this.field[newX][newY];

    if (tile === HOLE) {
      console.log(LOSE);
      this.gamePlay = false;
      return;
    }

    if (tile === HAT) {
      console.log(WIN);
      this.gamePlay = false;
      return;
    }

    if (tile === GHOST) {
      console.log(GHOST_CAUGHT);
      this.gamePlay = false;
      return;
    }

    this.field[oldX][oldY] = GRASS;
    this.field[newX][newY] = PLAYER;

    this.playerPosition.x = newX;
    this.playerPosition.y = newY;
  }

  /**
   * DONE: Ghost moves 1 tile toward the player
   */
  moveGhost(){
    this.field[this.ghostPosition.x][this.ghostPosition.y] = GRASS;

    const gx = this.ghostPosition.x;
    const gy = this.ghostPosition.y;

    const px = this.playerPosition.x;
    const py = this.playerPosition.y;

    let newGX = gx;
    let newGY = gy;

    if (px < gx) newGX--;
    else if (px > gx) newGX++;

    if (py < gy) newGY--;
    else if (py > gy) newGY++;

    if (newGX === px && newGY === py) {
      console.log(GHOST_CAUGHT);
      this.gamePlay = false;
      return;
    }

    if (this.field[newGX][newGY] === HOLE) {
      newGX = gx;
      newGY = gy;
    }

    this.field[newGX][newGY] = GHOST;
    this.ghostPosition.x = newGX;
    this.ghostPosition.y = newGY;
  }

  /**
   * NEW: ghostShriek()
   * Pontianak shrieks when she is exactly 1 tile away
   */
  ghostShriek(){
    const gx = this.ghostPosition.x;
    const gy = this.ghostPosition.y;

    const px = this.playerPosition.x;
    const py = this.playerPosition.y;

    const distance = Math.abs(gx - px) + Math.abs(gy - py);

    if (distance === 1) {
      console.log("\n" + GHOST_SHRIEK + "\n");
    }
  }

  /**
   * NEW: ghostScream()
   * Random Pontianak screams for storytelling atmosphere
   */
  ghostScream(){
    // 10% chance each turn
    if (Math.random() < 0.1) {

      const screams = [
        "A distant scream echoes through the darkness...",
        "You hear a chilling howl from far away...",
        "A woman's scream pierces the silence... HEEEEEEE!!!",
        "The Pontianak cries out in rage somewhere in the night...",
        "A haunting wail drifts across the wind... so close yet so far..."
      ];

      const scream = screams[Math.floor(Math.random() * screams.length)];

      console.log("\n" + scream + "\n");
    }
  }

  start(){
    this.gamePlay = true;
    this.field[0][0] = PLAYER;
    this.setHat();
    this.setGhost();
    
    do {
      this.printField();
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
          this.updateMove();
          break;
      }

      if(input === QUIT)
        this.gamePlay = false;  
      
      this.updateGame(input);

      if (this.gamePlay)
        this.moveGhost();

      if (this.gamePlay)
        this.ghostShriek();

      // NEW: simple, obvious, random Pontianak screams
      if (this.gamePlay)
        this.ghostScream();

      this.turns++;

    } while (this.gamePlay);
  }
}

// DONE: Generate a new field
const gameField = Field.generateField(ROWS, COLS, PERCENT);

// DONE: Welcome message
Field.welcomeMessage(MSG_WELCOME);

// DONE: Create instance
const game = new Field(gameField);
 
// DONE: Start game
game.start();
