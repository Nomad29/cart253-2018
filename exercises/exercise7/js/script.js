// Misplaced Master (Title screen)
// by Alexandra Melançon

// A simple title screen for an interactive storytelling game
// where you choose your own fate.
//
// Written with JavaScript P5.js and P5.DOM.js.

// 0: Title Screen
// 1: Game Screen
// 2: End Screen
// Variable for making possible to show the title screen, then the game screen
var gameScreen = 0;

var canvas;

// Variable to contain the DIV IDs in the HTML page
var titleCanvas;
var gameCanvas;

// Variable for the title screen content
var title;
// Variable for the music icon
var music;
var nomusic;
// Variable for the soundtrack
var themeSound;

// Variable for the sun object
var sun;
// Variable for the sun object graphic element
var sunGraphics;
// Number of vertex in the sun circle
var sunVertexResolution;
// Size of the sun
var sunRadius;
// Sun animation base time
var sunTime;
// Fastness of the sun animation
var sunTimeChange;
// Sun base noise value for cosine
var sunX;
// Sun base noise value for sine
var sunY;
// Sun noise value
var nSunVal;
// Sun wobbly base noise intensity
var nSunInt;
// Sun wobbly base noise amplitude
var nSunAmp;
// Sun X gradient
var gradX;
// Sun Y gradient
var gradY;
// Sun gradient
var gradient;
// Sun first gradient color
var sun1;
// Sun second gradient color
var sun2;
// Sun variable for containing the animated gradient
var sunGradient;
// Sun variable for allowing the gradient to animate
var sunGradientAnim;


// preload()
//
// Loads the target, fonts, decoy and frame images before the program starts
function preload() {
  // Load fonts
  myFont1 = loadFont("assets/fonts/bernadette.ttf");
  myFont2 = loadFont("assets/fonts/Poppins-Regular.ttf");
  myFont3 = loadFont("assets/fonts/Poppins-Light.ttf");
  // Load soundtrack
  themeSound = new Audio("assets/sounds/forest-songs.wav");
}

// setup()
//
// Creates the ball and paddles
function setup() {
  // Default canvas size with windows size
  canvas = createCanvas(windowWidth, windowHeight);
  // Default white paper background color
  background(245);
  // Erase the default black stroke
  noStroke();
  // Creates the sun graphics
  sun = new Sun(width / 2, height / 2, mouseX, mouseY);
  // Selects the DIV ID named 'witch'
  title = select("#title-container");
  title.show();
  // Selects the DIV named 'music'
  music = select("#music");
  nomusic = select("#nomusic");
  nomusic.hide();
}

// draw()
//
// Handles input, updates all the elements, checks for collisions
// and displays everything.
function draw() {

  themeSound.play();

  switch (gameScreen) {
    case 0:
      // Title screen
      titleScreen();
      break;

    case 1:
      // Game screen
      startGame();
      break;

    case 2:
      // End screen
      endGame();
      break;
  }
}

// titleScreen()
//
// This method sets the necessary variables to start the game
function titleScreen() {
  // Creates the title canvas to windows size
  titleCanvas = createCanvas(width, height);
  // Loads the backgrounds to the DIV ID named title-container in the HTML page
  titleCanvas.parent('title-container');
  // A paper white background color
  background(245);
  // Erase the default black stroke
  noStroke();
  // Display the sun object
  sun.display();
}


// startGame()
//
// This method sets the necessary variables to start the game
function startGame() {
  // Creates the game canvas to windows size
  gameCanvas = createCanvas(width, height);
  // Loads the backgrounds to the DIV ID named game-container in the HTML page
  gameCanvas.parent('game-container');
  // Hides the witch DIV ID image
  title.hide();
  // A black background color in the wait of developping the game screen in Exercice 8
  background(0);
  // Erase the default black stroke
  noStroke();
  // Display the text 'Coming soon'
  textSize(56);
  textFont(myFont1);
  fill(255);
  textAlign(CENTER);
  stroke(255);
  strokeWeight(0.7);
  text("Coming soon", width / 2, height / 2);
  // Display the text 'In exercise 8'
  textSize(20);
  textFont(myFont2);
  fill(250);
  textAlign(CENTER);
  text("In exercise 8...", width / 1.79, height / 1.88);
}

// endGame()
//
// This method sets the necessary variables to end the game
function endGame() {
  // To fill in for exercise 8
}


// mouseClicked()
//
// For the game to be able to start.
function mousePressed() {
  // If the user is on the title screen and click, the title screen will clear
  if (gameScreen = 0) {
    // Remove whole sketch on mouse press
    remove();
  }
  // If the user is on the game screen, the startGame function will appear
  else if (gameScreen = 1) {
    startGame();
  }

}
