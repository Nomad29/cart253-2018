// Basic OO Pong
// by Pippin Barr
//(Modified by Alexandra Melançon)

// A primitive implementation of Pong with no scoring system
// just the ability to play the game with the keyboard.
//
// Arrow keys control the right hand paddle, W and S control
// the left hand paddle.
//
// Written with JavaScript OOP.

// 0: Title Screen
// 1: Game Screen
// 2: Game-over Screen
// Variable for making possible to show the title, the game and the game-over screen
var gameScreen = 0;
// Variables for making possible to display or hide the content from the title Screen
// and the game screen
var gameDiv;
var lines1Div, lines2Div;
var yesDiv, noDiv;

// Variables to contain the DIV ID's in the HTML page
var canvas, title1, title2, circle1, circle2, hits1, hits2, message1, message2, total1, total2;
// Variable the sounds
var beepSound;
var failSound;
// Variable to contain the objects representing our ball and paddles
var ball;
var leftPaddle;
var rightPaddle;

// preload()
//
// Loads the target, fonts, decoy and frame images before the program starts
function preload() {
  // Loads the backgrounds images
  backgroundImage = loadImage("assets/images/game-background.png");
  // Loads content images
  titleImage = loadImage("assets/images/title-paddles.png");
  gameOverImage = loadImage("assets/images/gameover-paddles.png");
  // Load fonts
  myFont1 = loadFont("assets/fonts/Roboto-Regular.ttf");
  myFont2 = loadFont("assets/fonts/Raleway-ExtraLight.ttf");
  // Load sounds
  beepSound = new Audio("assets/sounds/new-beep.wav");
  failSound = new Audio("assets/sounds/fail-buzz.wav");
}

// setup()
//
// Creates the ball and paddles
function setup() {
  createCanvas(650, 400);
  // Let the DIVs for the title screen to show up while the DIV for the game screen disapears
  // Selects the DIV ID named 'start-game'
  gameDiv = select("#start-game");
  gameDiv.hide();
  // Selects the DIV ID named 'title-lines1'
  lines1Div = select("#title-lines1");
  lines1Div.show();
  // Selects the DIV ID named 'title-lines2'
  lines2Div = select("#title-lines2");
  lines2Div.show();
  // Selects the DIV IDs named 'yes' and 'no'
  yesDiv = select("#yes");
  yesDiv.hide();
  noDiv = select("#no");
  noDiv.hide();
  // Create a ball
  ball = new Ball(width/2,height/2,5,5,15,5);
  // Create the right paddle with UP and DOWN as controls
  rightPaddle = new Paddle(width-10,height/2,10,60,10,DOWN_ARROW,UP_ARROW);
  // Create the left paddle with W and S as controls
  // Keycodes 83 and 87 are W and S respectively
  leftPaddle = new Paddle(0,height/2,10,60,10,83,87);
}

// draw()
//
// Handles input, updates all the elements, checks for collisions
// and displays everything.
function draw() {

  if (gameScreen == 0) {
    // Code for the title screen
    // Display the title text 'Ping Pong'
    textSize(46);
    textFont(myFont1);
    fill(255);
    textAlign(CENTER);
    text("P I N G   P O N G", width/2, height/5.5);
    // Display the text 'Start the game'
    textSize(18);
    textFont(myFont2);
    fill(255);
    textAlign(CENTER);
    text("S T A R T   T H E   G A M E", width/2, height/3.2);
    // Display the text 'Click anywhere'
    textSize(14);
    textFont(myFont2);
    fill(200);
    textAlign(CENTER);
    text("( C L I C K   A N Y W H E R E )", width/2, height/2.7);
     // Display the paddles image logo
    image(titleImage,width/3.4, height/2.1);
    // Let the text smooth and undisturbed by antialiasing create by draw()
    noLoop();
  }

  else if (gameScreen == 1) {
   // Code for the game screen
   // Display the background
   background(backgroundImage);
   leftPaddle.handleInput();
   rightPaddle.handleInput();

   ball.update();
   leftPaddle.update();
   rightPaddle.update();

   if (ball.isOffScreen()) {
     ball.reset();
    // Play the sound of the player failing
     failSound.play();
   }

   ball.handleCollision(leftPaddle);
   ball.handleCollision(rightPaddle);

   ball.display();
   leftPaddle.display();
   rightPaddle.display();
  }

  else if (gameScreen == 2) {
   // Code for the game over screen
   // Display the title text 'Ping Pong'
   textSize(46);
   textFont(myFont1);
   fill(255);
   textAlign(CENTER);
   text("P L A Y E R   " + "?" + "   W I N S", width/2, height/5.5);
   // Display the text 'Start the game'
   textSize(18);
   textFont(myFont2);
   fill(255);
   textAlign(CENTER);
   text("C O N G R A T U L A T I O N !", width/2, height/3.2);
   // Display the paddles image logo
   image(gameOverImage,width/2.3, height/1.9);
   // Display the text 'Click anywhere'
   textSize(14);
   textFont(myFont2);
   fill(255);
   textAlign(CENTER);
   text("P L A Y   A G A I N  ?", width/2, height/1.3);

   yesDiv.show();
   noDiv.show();
   // Let the text smooth and undisturbed by antialiasing create by draw()
   noLoop();
  }

}

// mouseClicked()
//
// For the game to be able to start.
function mousePressed() {
  // If the user is on the title screen and click, the game will start
  if (gameScreen==0) {
    startGame();
  }
}

// startGame()
//
// This method sets the necessary variables to start the game
function startGame() {
  gameScreen=1;
  var canvas = createCanvas(650, 400);
  // Loads the backgrounds to the DIV ID named game-container in the HTML page
  canvas.parent('game-container');
  // Erase the default black stroke of the paddles and the ball
  noStroke();
  // Let the DIV for the game to show up while the DIVs for the title screen disapears
  gameDiv.show();
  lines1Div.hide();
  lines2Div.hide();
  yesDiv.hide();
  noDiv.hide();
  // Create the player titles
  title1 = createP('PLAYER 1');
  title1.parent('title1');
  title2 = createP('PLAYER 2');
  title2.parent('title2');
  // Create the players score circle
  circle1 = createP('??');
  circle1.parent('circle1');
  circle2 = createP('??');
  circle2.parent('circle2');
  // Create the players total hits word
  hits1 = createP('TOTAL HITS');
  hits1.parent('hits1');
  hits2 = createP('TOTAL HITS');
  hits2.parent('hits2');
  // Create the players total hits number
  total1 = createP('??');
  total1.parent('total1');
  total2 = createP('??');
  total2.parent('total2');
  // Create the players messages
  message1 = createP('KEEP GOING: DO IT!');
  message1.parent('message1');
  message2 = createP('YOU ARE THE LEAD!');
  message2.parent('message2');
  // Undo the noLoop() in the title screen function
  loop();
}
