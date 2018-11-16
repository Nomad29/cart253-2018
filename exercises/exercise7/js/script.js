// Misplaced Master (Title screen)
// by Alexandra Melançon

// A simple title screen for an interactive storytelling game
// where you choose your own fate.
//
// Written with JavaScript P5.js and P5.DOM.js.

// 0: Title Screen
// 1: Game Screen
// Variable for making possible to show the title screen, then the game screen
var gameScreen = 0;
// Variable to contain the DIV ID in the HTML page
var canvas;
// Variable to contain the object representing the sun
var sun;
// Variable for the logo
var logoImage;
// Variable for the witch
var witchImage;
// Variable for the plus icon
var plusIconImage;
// Variable for the music icon
var musicIconImage;
// Variable for the no music icon
var noMusicIconImage;
// Variable for the soundtrack
var themeSound;
// Variables for the images
var witchImage;

// preload()
//
// Loads the target, fonts, decoy and frame images before the program starts
function preload() {
  // Loads title content images
  logoImage = loadImage("assets/images/logo.png");
  witchImage = loadImage("assets/images/witch.png");
  plusIconImage = loadImage("assets/images/plus-icon.png");
  musicIconImage = loadImage("assets/images/music-icon.png");
  noMusicIconImage = loadImage("assets/images/nomusic-icon.png");
  // Load fonts
  myFont1 = loadFont("assets/fonts/bernadette.ttf");
  myFont2 = loadFont("assets/fonts/Poppins-Light.ttf");
  myFont3 = loadFont("assets/fonts/Poppins-Regular.ttf");
  // Load soundtrack
  themeSound = new Audio("assets/sounds/forest-songs.wav");
}

// setup()
//
// Creates the ball and paddles
function setup() {
  createCanvas(windowWidth,windowHeight);

  // Create a sun
  sun = new Sun(width / 2, height / 2, 5, 5, 15, 5);
}

// draw()
//
// Handles input, updates all the elements, checks for collisions
// and displays everything.
function draw() {
  // Title Screen()
  //
  // Code for the title screen
  if (gameScreen == 0) {
    // A paper white background color
    background(245);
  }

  // Game Screen()
  //
  // Code for the game screen to write in a startGame() function

}


// mouseClicked()
//
// For the game to be able to start.
function mousePressed() {
  // If the user is on the title screen and click, the game will start
  if (gameScreen == 0) {
    startGame();
  }
}


// startGame()
//
// This method sets the necessary variables to start the game
function startGame() {
  gameScreen = 1;
  var canvas = createCanvas(windowWidth,windowHeight);
  // Loads the backgrounds to the DIV ID named game-container in the HTML page
  canvas.parent('game-container');
  // Erase the default black stroke of the paddles and the ball
  noStroke();
}
