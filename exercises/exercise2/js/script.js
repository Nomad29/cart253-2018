/*********************************************************

Exercise 2 - The Artful Dodger
Pippin Barr

Starter code for exercise 2.

*********************************************************/

// The image of the player UFO
var avatarImage;

// The position and size of our avatar circle
var avatarX;
var avatarY;
var avatarSize = 80;

// The speed and velocity of our avatar circle
var avatarSpeed = 10;
var avatarVX = 0;
var avatarVY = 0;


// The image of the enemy fighter jet
var enemyImage;
// The position and size of the enemy fighter jet image
var enemyX;
var enemyY;
var enemySize = 85;
// How much bigger the enemy fighter jet image gets with each successful dodge
var enemySizeIncrease = 3;

// The speed and velocity of our enemy fighter jet image
var enemySpeed = 5;
var enemyVX = 5;
// How much bigger the enemy fighter jet image gets with each successful dodge
var enemySpeedIncrease = 0.5;

// How many dodges the player has made
var dodges = 0;

// The dodges counter text font used
var myFont;

// The background image of the canvas
var backgroundImage;

// preload()
//
// Load the font we're using before the program starts
function preload() {
  myFont = loadFont("assets/fonts/Bangers.ttf");
  backgroundImage = loadImage("assets/images/canyonBackground.png");
  avatarImage = loadImage("assets/images/avatarUfo.PNG");
  enemyImage = loadImage("assets/images/enemyJet.PNG");
}

// setup()
//
// Make the canvas, position the avatar and anemy
function setup() {
  // Create our playing area
  createCanvas(500,500);

  // Put the specifications for the dodges counter text
  textSize(28);
  textFont(myFont);
  textAlign(CENTER);

  // Put the avatar in the centre
  avatarX = width/2;
  avatarY = height/2;

  // Put the enemy to the left at a random y coordinate within the canvas
  enemyX = 0;
  enemyY = random(0,height);

  // No stroke so it looks cleaner
  noStroke();
}

// draw()
//
// Handle moving the avatar and enemy and checking for dodges and
// game over situations.
function draw() {
  // A canyon image background
  background(backgroundImage);
  // A white text color for the dodges counter
  fill(255);
  textFont(myFont);

  // Default the avatar's velocity to 0 in case no key is pressed this frame
  avatarVX = 0;
  avatarVY = 0;

  // Check which keys are down and set the avatar's velocity based on its
  // speed appropriately

  // Left and right
  if (keyIsDown(LEFT_ARROW)) {
    avatarVX = -avatarSpeed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    avatarVX = avatarSpeed;
  }

  // Up and down (separate if-statements so you can move vertically and
  // horizontally at the same time)
  if (keyIsDown(UP_ARROW)) {
    avatarVY = -avatarSpeed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    avatarVY = avatarSpeed;
  }

  // Move the avatar according to its calculated velocity
  avatarX = avatarX + avatarVX;
  avatarY = avatarY + avatarVY;

  // The enemy always moves at enemySpeed (which increases)
  enemyVX = enemySpeed;
  // Update the enemy's position based on its velocity
  enemyX = enemyX + enemyVX;

  // Check if the enemy and avatar overlap - if they do the player loses
  // We do this by checking if the distance between the centre of the enemy
  // and the centre of the avatar is less that their combined radii
  if (dist(enemyX,enemyY,avatarX,avatarY) < enemySize/2 + avatarSize/2) {
    // Tell the player they lost
    console.log("YOU LOSE!");
    // Display to the player that they lost
    text("You Lose!" + dodges, width/2, height/2);
    // Reset the enemy's position
    enemyX = 0;
    enemyY = random(0,height);
    // Reset the enemy's size and speed
    enemySize = 85;
    enemySpeed = 5;
    // Reset the avatar's position
    avatarX = width/2;
    avatarY = height/2;
    // Reset the dodge counter
    dodges = 0;
  }

  // Check if the avatar has gone off the screen (cheating!)
  if (avatarX < 0 || avatarX > width || avatarY < 0 || avatarY > height) {
    // If they went off the screen they lose in the same way as above.
    console.log("YOU LOSE!");
    // Display to the player that they lost
    text("You Lose!" + dodges, width/2, height/2);
    enemyX = 0;
    enemyY = random(0,height);
    enemySize = 85;
    enemySpeed = 5;
    avatarX = width/2;
    avatarY = height/2;
    dodges = 0;
  }

  // Check if the enemy has moved all the way across the screen
  if (enemyX > width) {
    // This means the player dodged so update its dodge statistic
    dodges = dodges + 1;
    // Tell them how many dodges they have made
    console.log(dodges);
    // Reset the enemy's position to the left at a random height
    enemyX = 0;
    enemyY = random(0,height);
    // Increase the enemy's speed and size to make the game harder
    enemySpeed = enemySpeed + enemySpeedIncrease;
    enemySize = enemySize + enemySizeIncrease;
  }

  // Display the current number of successful in the console
  console.log(dodges);
  // Display the dodges counter
  text("Score: " + dodges, width/2, height/10);

  // Display the player as an UFO
  image(avatarImage,avatarX,avatarY,80,80);

  // Display the enemy fighter jet image
  image(enemyImage,enemyX,enemyY,enemySize,0,0);

}
