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
var endDiv;
var lines1Div, lines2Div;
var yesDiv, noDiv;
var playerLeftScore, playerRightScore;
// Variables for making possible to display or hide the different encouragement
// messages shown to the players
var message1, message2, message3, message4, circle1Div, circle2Div, circle3Div, circle4Div;
// Variables to contain the DIV ID's in the HTML page
var canvas, title1, title2, hits1, hits2, total1, total2, winner, congrats, playAgain;
// Variables for the sounds
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
  endDiv = select("#end-game");
  endDiv.hide();

  // Create the players messages
  message1 = createP('KEEP GOING: DO IT!');
  message1.parent('message1');
  message2 = createP('YOU ARE THE LEAD!');
  message2.parent('message2');
  message3 = createP('KEEP GOING: DO IT!');
  message3.parent('message3');
  message4 = createP('YOU ARE THE LEAD!');
  message4.parent('message4');
  message1.hide();
  message2.hide();
  message3.hide();
  message4.hide();

  // Create the players score circle
  circle1Div = select("#circle1");
  circle1Div.hide();
  circle2Div = select("#circle2");
  circle2Div.hide();
  circle3Div = select("#circle3");
  circle3Div.hide();
  circle4Div = select("#circle4");
  circle4Div.hide();

  // Create a ball
  ball = new Ball(width/2,height/2,5,5,15,5);
  // Create the right paddle with UP and DOWN as controls
  rightPaddle = new Paddle(width-10,height/2,10,60,10,DOWN_ARROW,UP_ARROW,0);
  // Create the left paddle with W and S as controls
  // Keycodes 83 and 87 are W and S respectively
  leftPaddle = new Paddle(0,height/2,10,60,10,83,87,0);
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
    // Display the title text 'Ping Pong'
    textSize(46);
    textFont(myFont1);
    fill(255);
    textAlign(CENTER);
    stroke(255);
    strokeWeight(0.7);
    text("P I N G   P O N G", width/2, height/5.5);
    // Display the text 'Start the game'
    textSize(16);
    textFont(myFont2);
    fill(255);
    textAlign(CENTER);
    text("S T A R T   T H E   G A M E", width/2, height/3.2);
    // Display the text 'Click anywhere'
    textSize(12);
    textFont(myFont2);
    fill(137);
    textAlign(CENTER);
    text("( C L I C K   A N Y W H E R E )", width/2, height/2.7);
     // Display the paddles image logo
    image(titleImage,width/3.4, height/2.1);
    // Let the text smooth and undisturbed by antialiasing create by draw()
    noLoop();
  }

  // Game Screen()
  //
  // Code for the game screen
  else if (gameScreen == 1) {
   // Display the background
   background(backgroundImage);
   leftPaddle.handleInput();
   rightPaddle.handleInput();

   ball.update();
   leftPaddle.update();
   rightPaddle.update();

   if (ball.isOffScreen()) {
       // Checks if left or right has won points
       // Player 1 points
       if (ball.x + ball.size < 0) {
         leftPaddle.score++;
       }

       // Player 2 points
       if (ball.x > width) {
         rightPaddle.score++;
       }
       // Reset the ball after a fail
       ball.reset();
       // Play the sound of failing
       failSound.play();
   }

   ball.handleCollision(leftPaddle);
   ball.handleCollision(rightPaddle);

   ball.display();
   leftPaddle.display();
   rightPaddle.display();

   // Displaying the score of Player 1
   if (leftPaddle.score >= 0) {
    leftPaddle.leftScore();
   }

   // Display the score of Player 2
   if (rightPaddle.score >= 0) {
    rightPaddle.rightScore();
   }


   if (leftPaddle.score >= rightPaddle.score + 1) {
     message4.show();
     message3.hide();
     circle4Div.show();
     circle3Div.hide();
   }
   else if (leftPaddle.score <= rightPaddle.score + 1) {
     message4.hide();
     message3.show();
     circle4Div.hide();
     circle3Div.show();
   }
   if (rightPaddle.score >= leftPaddle.score + 1) {
     message2.show();
     message1.hide();
     circle2Div.show();
     circle1Div.hide();
   }
   else if (rightPaddle.score <= leftPaddle.score + 1) {
      message2.hide();
      message1.show();
      circle2Div.hide();
      circle1Div.show();
    }

   // Score of 11 points to win the game
   if (leftPaddle.score === 10 || rightPaddle.score === 10) {
    gameScreen=2;
   }


  }

  // Game-Over Screen()
  //
  // Code for the game over screen
  else if (gameScreen == 2) {
    // Let the DIVs for the game to disapears while the DIVs for the game-over screen to show up
    lines1Div.show();
    lines2Div.show();
    yesDiv.show();
    noDiv.show();
    gameDiv.hide();
    endDiv.show();

    if (leftPaddle.score === 10) {
      // Display the title text 'PLAYER 2 WINS'
      winner = createP('PLAYER ' + '2' + ' WINS');
      winner.parent('winner');
     }

     if (rightPaddle.score === 10) {
      // Display the title text 'PLAYER 1 WINS'
      winner = createP('PLAYER ' + '1' + ' WINS');
      winner.parent('winner');
     }

   // Display the text 'CONGRATULATION'
   congrats = createP('CONGRATULATION!');
   congrats.parent('congrats');
   // Display the text 'PLAY AGAIN'
   playAgain = createP('PLAY AGAIN?');
   playAgain.parent('playAgain');

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
  endDiv.hide();
  // Create the player titles
  title1 = createP('PLAYER 1');
  title1.parent('title1');
  title2 = createP('PLAYER 2');
  title2.parent('title2');
  // Create the players total hits word
  hits1 = createP('TOTAL SCORE');
  hits1.parent('hits1');
  hits2 = createP('TOTAL SCORE');
  hits2.parent('hits2');
  // Undo the noLoop() in the title screen function
  loop();
}
