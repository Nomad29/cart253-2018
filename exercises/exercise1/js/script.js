// Exercise 1 - Moving pictures
// Pippin Barr
//
// Starter code for exercise 1.
// It moves two pictures around on the canvas.
// One moves linearly down the screen.
// One moves toward the mouse cursor.


// The image of a clown face
var clownImage;
// The current position of the clown face
var clownImageX;
var clownImageY;

// The transparent image of "felt" that wipes down the canvas
var feltTextureImage;
// The current position of the transparent image of "felt"
var feltTextureImageX;
var feltTextureImageY;

// The image of a dog running
var dogImage;
// The current position of the dog running
var dogImageX;
var dogImageY;

// The image of a itClown face
var itClownImage;
// The default position of the itClown face
var itClownImageX;
var itClownImageY;

// The dimensions of the circle shape
var circleSize = 40;
// The default position of the circle shape
var circleX = 0;
var circleY = 0;


// preload()
//
// Load the four images we're using before the program starts

function preload() {
  clownImage = loadImage("assets/images/clown.png");
  feltTextureImage = loadImage("assets/images/black-felt-texture.png");
  dogImage = loadImage("assets/images/dog.png");
  itClownImage = loadImage("assets/images/itClown.png");
}


// setup()
//
// Set up the canvas, position the images, set the image mode.

function setup() {
  // Create our canvas
  createCanvas(640,640);
  // Edit the color of the ellipse
  fill(255, 0, 0);

  // Start the clown image at the centre of the canvas
  clownImageX = width/2;
  clownImageY = height/2;

  // Start the felt image perfectly off screen above the canvas
  feltTextureImageX = width/2;
  feltTextureImageY = 0 - feltTextureImage.height/2;

  // Start the dog image at the left of the canvas
  dogImageX = 0;
  dogImageY = height/2;

  // We'll use imageMode CENTER for this script
  imageMode(CENTER);
}


// draw()
//
// Moves the felt image linearly
// Moves the clown face toward the current mouse location
// Moves the dog image toward the right side of the canvas
// Moves the itClown face at the current mouse location
// Moves the circle shape slowy toward the current mouse location

function draw() {

  // Move the felt image down by increasing its y position
  feltTextureImageY += 1;

  // Display the felt image
  image(feltTextureImage,feltTextureImageX,feltTextureImageY);

  // Move the clown by moving it 1/10th of its current distance from the mouse

  // Calculate the distance in X and in Y
  var xDistance = mouseX - clownImageX;
  var yDistance = mouseY - clownImageY;
  // Add 1/10th of the x and y distance to the clown's current (x,y) location
  clownImageX = clownImageX + xDistance/10;
  clownImageY = clownImageY + yDistance/10;

  // Display the clown image
  image(clownImage,clownImageX,clownImageY);

  // Move the dog from left to right across the canvas
  dogImageX += 1;

  // Display the dog image
  image(dogImage,dogImageX,dogImageY);

  // Display the itClown following the current mouse location
  itClownImageX = mouseX;
  itClownImageY = mouseY;

  // Display the itClown image
  image(itClownImage,itClownImageX,itClownImageY);

  // Move the circle by moving it 1/40th of its current distance from the mouse

  // Calculate the distance in X and in Y
  var xDistance = mouseX - circleX;
  var yDistance = mouseY - circleY;
  // Add 1/40th of the x and y distance to the circle's current (x,y) location
  circleX = circleX + xDistance/40;
  circleY = circleY + yDistance/40;

  // Draw and display the circle
  ellipse(circleX,circleY,circleSize,circleSize);

}
