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

// Variable to contain the DIV ID's in the HTML page
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
  var canvas = createCanvas(650, 400);
  // Loads the backgrounds to the DIV ID named game-container in the HTML page
  canvas.parent('game-container');
  // Erase the default black stroke of the paddles and the ball
  noStroke();
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
  // Display the game background
  background(backgroundImage);

  leftPaddle.handleInput();
  rightPaddle.handleInput();

  ball.update();
  leftPaddle.update();
  rightPaddle.update();

  if (ball.isOffScreen()) {
    ball.reset();
    failSound.play();
  }

  ball.handleCollision(leftPaddle);
  ball.handleCollision(rightPaddle);

  ball.display();
  leftPaddle.display();
  rightPaddle.display();
}
