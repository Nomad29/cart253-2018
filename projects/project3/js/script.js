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
var gameCanvas;
var endCanvas;

// Variable for the logo
var logo;

// Variable for the title screen content
var title;
// Variable for the game screen content
var inGame;
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
var prologue, slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8,
slide9, slide10, ending;
// Variables for the game content
// Variables for the game content texts
var txt1, txt2, txt3, txt4, txt5, txt6, txt7, txt8, txt9, txt10, txt11;
// Variables for the game content prologue title
var title1;
// Variables for the game content images
var img = [];
// Variables for the game content prologue input/continue button
var input, button;
// Variables for the in-game content choice buttons
var button1, button2, button3, button5, button6, button7, button8,
button9, button10, button11, button12, button13, button14;
// Variables for the in-game content choice button functions
var nextButton1, nextButton2;

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

  // Changed the gray logo to a white version when in game
  logo = createImg("assets/images/p5js-logo-white.svg");

  // Selects the DIV ID named 'title-container'
  title = select("#title-container");
  title.show();
  // Selects the DIV ID named 'game-container'
  inGame = select("#game-container");
  inGame.hide();
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
  for (var i = 1; i < 10; i++) {
    img[i] = createImg("assets/images/" + i + ".png");
    img[i].parent('game-images');
  }
  // Creates the text placed in the game content
  // Hide them at the beginning of the program
  txt1 = select("#game-text1");
  txt1.hide();
  txt2 = select("#game-text2");
  txt2.hide();
  txt3 = select("#game-text3");
  txt3.hide();
  txt4 = select("#game-text4");
  txt4.hide();
  txt5 = select("#game-text5");
  txt5.hide();
  txt6 = select("#game-text6");
  txt6.hide();
  txt7 = select("#game-text7");
  txt7.hide();
  txt8 = select("#game-text8");
  txt8.hide();
  txt9 = select("#game-text9");
  txt9.hide();
  txt10 = select("#game-text10");
  txt10.hide();
  txt11 = select("#game-text11");
  txt11.hide();
  // Creates and selects the DIV named 'game-title' for placing the game content title
  title1 = select("#game-title1");
  title1.hide();

  // Creates and selects the DIV named 'game-input' for placing in the game
  input = createInput('(Enter the name of your master)');
  input.changed(masterName);
  input.parent('game-input');

  // Creates and selects the DIV named 'game-button' for placing in the game
  button = createButton('CONTINUE');
  button.parent('game-buttonBox');
  button.position(input.x + input.width);
  button.mousePressed(nextButton1);

  // Creates the choices buttons for slide1()
  // Creates and selects the DIV named 'ingame1-button' for placing in the game
  button1 = select("#ingame1-buttonBox");
  button1.mousePressed(nextButton1);
  // Creates and selects the DIV named 'ingame2-button' for placing in the game
  button2 = select("#ingame2-buttonBox");
  button2.mousePressed(nextButton2);

  // Creates the choices button for slide2()
  // Creates and selects the DIV named 'ingame3-button' for placing in the game
  button3 = select("#ingame3-buttonBox");
  button3.mousePressed(nextButton1);

  // Creates the choices button for slide3()
  // Creates and selects the DIV named 'ingame5-button' for placing in the game
  button5 = select("#ingame5-buttonBox");
  button5.mousePressed(nextButton1);
  // Creates and selects the DIV named 'ingame6-button' for placing in the game
  button6 = select("#ingame6-buttonBox");
  button6.mousePressed(nextButton2);

  // Creates the choices button for slide4()
  // Creates and selects the DIV named 'ingame7-button' for placing in the game
  button7 = select("#ingame7-buttonBox");
  button7.mousePressed(nextButton1);

  // Creates the choices button for slide5()
  // Creates and selects the DIV named 'ingame8-button' for placing in the game
  button8 = select("#ingame8-buttonBox");
  button8.mousePressed(nextButton1);
  // Creates and selects the DIV named 'ingame9-button' for placing in the game
  button9 = select("#ingame9-buttonBox");
  button9.mousePressed(nextButton2);

  // Creates the choices button for slide6()
  // Creates and selects the DIV named 'ingame10-button' for placing in the game
  button10 = select("#ingame10-buttonBox");
  button10.mousePressed(nextButton2);

  // Creates the choices button for slide7()
  // Creates and selects the DIV named 'ingame11-button' for placing in the game
  button11 = select("#ingame11-buttonBox");
  button11.mousePressed(nextButton2);

  // Creates the choices button for slide8()
  // Creates and selects the DIV named 'ingame12-button' for placing in the game
  button12 = select("#ingame12-buttonBox");
  button12.mousePressed(nextButton2);

  // Creates the choices button for slide9()
  // Creates and selects the DIV named 'ingame13-button' for placing in the game
  button13 = select("#ingame13-buttonBox");
  button13.mousePressed(nextButton1);

  // Creates the choices button for slide10()
  // Creates and selects the DIV named 'ingame14-button' for placing in the game
  button14 = select("#ingame14-buttonBox");
  button14.mousePressed(nextButton1);
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
}

// startGame()
//
// This method sets the necessary variables to start the game
function startGame() {
  // Creates the title canvas to windows size
  gameCanvas = createCanvas(width, height);
  // Loads the backgrounds to the DIV ID named title-container in the HTML page
  gameCanvas.parent('game-container');
  // A paper white background color
  background(245);
  // Hides the titleScreen
  title.hide();
  // Show the game
  inGame.show();
  // Display the game
  game.display();
}

// endGame()
//
// This method sets the necessary variables to end the game
function endGame() {
  // Creates the title canvas to windows size
  endCanvas = createCanvas(width, height);
  // Loads the backgrounds to the DIV ID named title-container in the HTML page
  endCanvas.parent('end-container');
  // A black background color
  background(0);
  // Hides the game
  inGame.hide();
  // Re-add the default gray logo
  logo = logo.hide();
}

// changeIcon()
//
// Changes the music icon when clicked
var changeIcon = function() {
  music.hide();
  nomusic.show();
}

// masterName()
//
// Creates and changes the master's name the player gave troughout the game
var masterName = function() {
  var name = createP(input.value());
  name.parent('masta');

  // Makes visible the master's name on slide3()
  if (scenario == 3 == false) {
    var name = createP(input.value());
    name.parent('masta2');
    name = input.value();
  }
  // Makes visible the master's name on slide8()
  if (scenario == 8 == false) {
    var name = createP(input.value());
    name.parent('masta3');
    name = input.value();
  }
  // Makes visible the master's name on slide9()
  if (scenario == 9 == false) {
    var name = createP(input.value());
    name.parent('masta4');
    name = input.value();
  }
  // Makes visible the master's name on slide10()
  if (scenario == 10 == false) {
    var name = createP(input.value());
    name.parent('masta5');
    name = input.value();
  }
}


// nextButton1()
//
// Changes the different scenarios and content in-game
var nextButton1 = function() {
  // Get the game to the next scenario page
  scenario = scenario + 1;
  // Get the images for the scenario pages
  var i = i + 1;
}

// nextButton2()
//
// Changes the different scenarios and content in-game
var nextButton2 = function() {
  // Get the game to the next scenario page
  scenario = scenario + 2;
  // Get the images for the scenario pages
  var i = i + 2;
}

// keyPressed()
//
// Give the option to restart the game by mouse cliking the screen
function keyPressed() {
  // If the user is on the title screen and click, the title screen will clear
  if (gameScreen = 0) {
    // Remove whole sketch on mouse press
    remove();
  }
  // If the user is on the game screen, the startGame function will appear
  else if (gameScreen = 1) {
    logo = logo.parent('logo');
    startGame();
  }
}

// windowResized()
//
// Resize the window when resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
