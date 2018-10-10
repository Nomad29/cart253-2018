/******************************************************

Project 1 - Game Chaser
(Modified by Alexandra Melançon)

Project 1 is about a simple game of cat and mouse with Physics-based movement,
keyboard controls, health/stamina,sprinting, random movement, screen wrap.

******************************************************/

// Track whether the game is over
var gameOver = false;

// Player position, size, velocity
var playerX;
var playerY;
var playerRadius = 40;
var playerVX = 0;
var playerVY = 0;
var playerMaxSpeed = 2;
// Player boost when holding SHIFT
var playerSpeedBoost = 5;
// Player health
var playerHealth;
var playerMaxHealth = 255;
// Player fill color
var playerFill = 50 + playerAvatarTleft && playerAvatarTright;
// Player avatar for left and right
var playerAvatar;
var playerAvatarRight;
// Player avatar images when losing health
var playerAvatarTleft;
var playerAvatarTright;

// Prey position, size, velocity
var preyX;
var preyY;
var preyRadius = 12.5;
var preyVX;
var preyVY;
var preyMaxSpeed = 4;
// Prey health
var preyHealth;
var preyMaxHealth = 100;
// Prey fill color
var preyFill = 200;
// Prey Perlin noise base value
var t;
// Prey images
var preyImage;
var preyImageBlur;

// Amount of health obtained per frame of "eating" the prey
var eatHealth = 10;
// Number of prey eaten during the game
var preyEaten = 0;

// preload()
//
// Loads the target, fonts, decoy and frame images before the program starts
function preload() {
  playerAvatar = loadImage("assets/images/tails-left.png");
  playerAvatarRight = loadImage("assets/images/tails-right.png");
  playerAvatarTleft = loadImage("assets/images/tails-left-tired.png");
  playerAvatarTright = loadImage("assets/images/tails-right-tired.png");

  preyImage = loadImage("assets/images/ring.png");
  preyImageBlur = loadImage("assets/images/ring-blur.png");
}

// setup()
//
// Sets up the basic elements of the game
function setup() {
  var canvas = createCanvas(500,500);
  t = 0;
  noStroke();

  setupPrey();
  setupPlayer();
}

// setupPrey()
//
// Initialises prey's position, velocity, and health
function setupPrey() {
  preyX = width/5;
  preyY = height/2;
  preyVX = -preyMaxSpeed;
  preyVY = preyMaxSpeed;
  preyHealth = preyMaxHealth;
}

// setupPlayer()
//
// Initialises player position and health
function setupPlayer() {
  playerX = 4*width/5;
  playerY = height/2;
  playerHealth = playerMaxHealth;
}

// draw()
//
// While the game is active, checks input
// updates positions of prey and player,
// checks health (dying), checks eating (overlaps)
// displays the two agents.
// When the game is over, shows the game over screen.
function draw() {
  background(100,100,200);
  frameRate(60);

  if (!gameOver) {
    movePlayer();
    movePrey();

    updateHealth();
    checkEating();

    drawPrey();
    drawPlayer();

    handleInput();
  }
  else {
    showGameOver();
  }
}


// movePlayer()
//
// Updates player position based on velocity,
// wraps around the edges.
function movePlayer() {
  // Update position
  playerX += playerVX;
  playerY += playerVY;

  // Wrap when player goes off the canvas
  if (playerX < 0) {
    playerX += width;
  }
  else if (playerX > width) {
    playerX -= width;
  }

  if (playerY < 0) {
    playerY += height;
  }
  else if (playerY > height) {
    playerY -= height;
  }
}

// updateHealth()
//
// Reduce the player's health (every frame)
// Check if the player is dead
function updateHealth() {
  // Reduce player health, constrain to reasonable range
  playerHealth = constrain(playerHealth - 0.5,0,playerMaxHealth);
  // Check if the player is dead
  if (playerHealth === 0) {
    // If so, the game is over
    gameOver = true;
  }
  // Reduce player health quicker when holding SHIFT for boost
  if (keyIsDown(SHIFT)) {
  playerHealth = constrain(playerHealth - 0.8,0,playerMaxHealth);
  }

}

// checkEating()
//
// Check if the player overlaps the prey and updates health of both
function checkEating() {
  // Get distance of player to prey
  var d = dist(playerX,playerY,preyX,preyY);
  // Check if it's an overlap
  if (d < playerRadius + preyRadius) {
    // Increase the player health
    playerHealth = constrain(playerHealth + eatHealth,0,playerMaxHealth);
    // Reduce the prey health
    preyHealth = constrain(preyHealth - eatHealth,0,preyMaxHealth);

    // Check if the prey died
    if (preyHealth === 0) {
      // Move the "new" prey to a random position
      preyX = random(0,500);
      preyY = random(0,500);
      // Give it full health
      preyHealth = preyMaxHealth;
      // Track how many prey were eaten
      preyEaten++;
    }
  }
}

// drawPrey()
//
// Draw the prey as an ellipse with alpha based on health
function drawPrey() {

  // Gives the prey a colorful shading with the help of the Perlin noise
  // Allows the prey to move according to Perlin noise movements
  preyX = width * noise(t+5);
  preyY * noise(t);
  var r = 455 * noise(t+10);
  var g = 455 * noise(t+15);
  var b = 455 * noise(t+20);

  // Defines the shapes and others visuals specfications of the prey
  noStroke();
  tint(r,g,b,preyFill,preyHealth);
  image(preyImage,preyX,preyY,preyRadius*2);

  if (playerHealth < 100) {
    frameRate(40);
    image(preyImageBlur,preyX,preyY,preyRadius*2.3);
  }

}

// movePrey()
//
// Moves the prey based on Perlin noise velocity changes
function movePrey() {

  // Give 0.01 to the Perlin noise movements
  t = t + 0.01;

  // Set velocity based on noise values to get a new direction
  // and speed of movement
  // Use map() to convert from the 0-1 range of the noise() function
  // to the appropriate range of velocities for the prey
  preyVX = map(noise(t),0,1,-preyMaxSpeed,preyMaxSpeed);
  preyVY = map(noise(t),0,1,-preyMaxSpeed,preyMaxSpeed);

  // Update prey position based on velocity
  preyX += preyVX;
  preyY += preyVY;

  // Screen wrapping
  if (preyX < 0) {
    preyX += width;
  }
  else if (preyX > width) {
    preyX -= width;
  }

  if (preyY < 0) {
    preyY += height;
  }
  else if (preyY > height) {
    preyY -= height;
  }
}


// drawPlayer()
//
// Draw the player as an ellipse with alpha based on health
function drawPlayer() {

  noTint();
  fill(playerFill,playerHealth);
  image(playerAvatar,playerX,playerY,playerRadius*2);

}


// handleInput()
//
// Checks arrow keys and adjusts player velocity accordingly
function handleInput() {
  // Check for horizontal movement
  if (keyIsDown(LEFT_ARROW)) {
    playerVX = -playerMaxSpeed;
    image(playerAvatar,playerX,playerY,playerRadius*2);
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    playerVX = playerMaxSpeed;
    image(playerAvatarRight,playerX,playerY,playerRadius*2);
  }
  else {
    playerVX = 0;
  }

  // Change the player avatar when losing health
  if ((playerHealth < 100) && (keyIsDown(RIGHT_ARROW))) {
    image(playerAvatarTright,playerX,playerY,playerRadius*2.1);
  }
  else if (playerHealth < 100) {
    image(playerAvatarTleft,playerX,playerY,playerRadius*2.1);
  }

  // Check for vertical movement
  if (keyIsDown(UP_ARROW)) {
    playerVY = -playerMaxSpeed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    playerVY = playerMaxSpeed;
  }
  else {
    playerVY = 0;
  }

  // Give boost to the player when holding SHIFT for UP and DOWN arrows
  if (keyIsDown(SHIFT) && keyIsDown(UP_ARROW)) {
    playerVY = -playerSpeedBoost;
  }
  else if (keyIsDown(SHIFT) && keyIsDown(DOWN_ARROW)) {
    playerVY = +playerSpeedBoost;
  }

  // Give boost to the player when holding SHIFT for LEFT and RIGHT arrows
  if (keyIsDown(SHIFT) && keyIsDown(LEFT_ARROW)) {
    playerVX = -playerSpeedBoost;
  }
  else if (keyIsDown(SHIFT) && keyIsDown(RIGHT_ARROW)) {
    playerVX = +playerSpeedBoost;
  }

}

// showGameOver()
//
// Display text about the game being over!
function showGameOver() {
  textSize(32);
  textAlign(CENTER,CENTER);
  fill(0);
  var gameOverText = "GAME OVER\n";
  gameOverText += "You ate " + preyEaten + " prey\n";
  gameOverText += "before you died."
  text(gameOverText,width/2,height/2);
}
