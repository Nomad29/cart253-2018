// Misplaced Master (Title screen)
// by Alexandra Melançon

// A simple title screen for an interactive storytelling game
// where you choose your own fate.
//
// Written with JavaScript P5.js and P5.DOM.js.
// Credits to Peter Hofmann, on OpenProcessing.org for helping me with creating
// noise with the sun object.

// 0: Title Screen
// 1: Game Screen
// 2: End Screen
// Variable for making possible to show the title screen, then the game screen
var gameScreen = 0;

// Variable for the P5.js sketch canvas
var canvas;

// Variable to contain the DIV IDs in the HTML page
var titleCanvas;

// Variable for the title screen content
var title;
// Variable for the music icon
var music;
var nomusic;

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

// Variable for the game content
var game;
// Variable for making possible to show multiple game content
var scenario = 0;
// Variables for the differents game scenarios
var prologue;
var slide1;
var slide2;
// Variables for the game content
var text1;
var title1;
var img = [];
var input, button;
var nextButton;

// preload()
//
// Loads the target, fonts, decoy and frame images before the program starts
function preload() {
  // Load fonts
  myFont1 = loadFont("assets/fonts/bernadette.ttf");
  myFont2 = loadFont("assets/fonts/Poppins-Regular.ttf");
  myFont3 = loadFont("assets/fonts/Poppins-Light.ttf");
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
  game = new Game(width / 2, height / 2, mouseX, mouseY);
  // Selects the DIV ID named 'witch'
  title = select("#title-container");
  title.show();
  // Selects the DIV named 'music'
  music = select("#music");
  // Selects the DIV named 'nomusic'
  nomusic = select("#nomusic");
  // Show or hide the default icon
  music.show();
  nomusic.hide();
  // Give music and nomusic to change when clicked
  music.mousePressed(changeIcon);

  // Creates the images placed in the game content
  // Loads the game content images
  for (var i=1; i<4; i++) {
    img[i] = createImg("assets/images/"+i+".png");
    img[i].parent('game-images');
  }
  // Creates and selects the DIV named 'game-text' for placing the game content text
  text1 = createP("Today is finally the time you have been waiting for, young wizard, your new master is waiting for you at the main district in the capital. What was his name again? Please type in the name below.");
  text1.parent('game-text');
  // Creates and selects the DIV named 'game-title' for placing the game content title
  title1 = createP("Prologue");
  title1.parent('game-title');
  // Creates and selects the DIV named 'game-input' for placing in the game
  input = createInput();
  input.parent('game-input');
  // Creates and selects the DIV named 'game-button' for placing in the game
  button = createButton('submit');
  button.parent('game-buttonBox');
  button.position(input.x + input.width);
  button.mousePressed(nextButton);
}

// draw()
//
// Handles input, updates all the elements, checks for collisions
// and displays everything.
function draw() {
  // Let the user switch between the title screen, the game screen and the end game screen.
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
  // Hide the game content
  img[1].hide();
  img[2].hide();
  img[3].hide();
}

// startGame()
//
// This method sets the necessary variables to start the game
function startGame() {
  // A paper white background color
  background(245);
  // Hides the witch DIV ID image
  title.hide();
  // Display the game
  game.display();
}

// endGame()
//
// This method sets the necessary variables to end the game
function endGame() {
  // To fill in for exercise 8
}

// changeIcon()
//
// Changes the music icon when clicked
var changeIcon = function() {
  music.hide();
  nomusic.show();
}

// nextButton()
//
// Changes the different scenarios and content in-game
var nextButton = function() {
  // Get the game to the next scenario page
  scenario = scenario + 1;
  // Get the images for the scenario pages
  var i = i + 1;
}

// keyPressed()
//
// Give the option to restart the game by mouse cliking the screen
function keyPressed() {
  // If the user is on the title screen and click, the title screen will clear
  if ((gameScreen = 0) && (keyCode == ENTER)) {
    // Remove whole sketch on mouse press
    remove();
  }
  // If the user is on the game screen, the startGame function will appear
  else if ((gameScreen = 1) && (keyCode == ENTER)) {
    startGame();
  }
}
