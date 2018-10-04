/******************************************************************************
Exercise 3 - Where's Sausage Dog?
Pippin Barr
(Modified by Alexandra Melançon)

Exercice 3 is about a game where you need to find ''Charlie'' the sausage dog in the animal crowd.
Done with the Starter code for exercise 3 by Pippin Barr.

Animal images from:
https://creativenerds.co.uk/freebies/80-free-wildlife-icons-the-best-ever-animal-icon-set/
******************************************************************************/

// Position and image of the sausage dog we're searching for
var targetX;
var targetY;
var targetImage;

// Target's size
var targetSize = 1;
// Target's size increase
var targetSizeIncrease = 5;

// The ten decoy images
var decoyImage1;
var decoyImage2;
var decoyImage3;
var decoyImage4;
var decoyImage5;
var decoyImage6;
var decoyImage7;
var decoyImage8;
var decoyImage9;
var decoyImage10;

// The frame image
var frameImage;
// The position of the frame image
var frameX;
var frameY;

// The number of decoys to show on the screen, randomly
// chosen from the decoy images
var numDecoys = 100;

// Keep track of whether they've won
var gameOver = false;

// The titles text font used
var myFont1;
// The body text font used
var myFont2;

// Makes the target image jitter with an angle when winning
var angle = 0.0;
var jitter = 0.0;

// Makes the speed of the moving/jumping animation possible
var t = 0;

// preload()
//
// Loads the target, fonts, decoy and frame images before the program starts
function preload() {
  targetImage = loadImage("assets/images/animals-target.png");

  myFont1 = loadFont("assets/fonts/ProzaLibre-Medium.ttf");
  myFont2 = loadFont("assets/fonts/OpenSans-Regular.ttf");

  decoyImage1 = loadImage("assets/images/animals-01.png");
  decoyImage2 = loadImage("assets/images/animals-02.png");
  decoyImage3 = loadImage("assets/images/animals-03.png");
  decoyImage4 = loadImage("assets/images/animals-04.png");
  decoyImage5 = loadImage("assets/images/animals-05.png");
  decoyImage6 = loadImage("assets/images/animals-06.png");
  decoyImage7 = loadImage("assets/images/animals-07.png");
  decoyImage8 = loadImage("assets/images/animals-08.png");
  decoyImage9 = loadImage("assets/images/animals-09.png");
  decoyImage10 = loadImage("assets/images/animals-10.png");

  frameImage = loadImage("assets/images/frame.png");
}

// setup()
//
// Creates the canvas, sets basic modes, draws correct number
// of decoys in random positions, then the target
function setup() {
  createCanvas(windowWidth,windowHeight);
  // Speed of the moving/jumping animation
  tx = random(0,1000);
  ty = random(0,1000);
  // Background specifications
  background("#ffff8c");
  imageMode(CENTER);

  // Put the frame image in the centre
  frameX = width/2;
  frameY = height/2;

  // Use a for loop to draw as many decoys as we need
  for (var i = 0; i < numDecoys; i++) {
    // Choose a random location for this decoy
    var x = random(0,width);
    var y = random(0,height);
    // Generate a random number we can use for probability
    var r = random();
    // Use the random number to display one of the ten decoy
    // images, each with a 10% chance of being shown
    // We'll talk more about this nice quality of random soon enough
    if (r < 0.1) {
      image(decoyImage1,x,y);
    }
    else if (r < 0.2) {
      image(decoyImage2,x,y);
    }
    else if (r < 0.3) {
      image(decoyImage3,x,y);
    }
    else if (r < 0.4) {
      image(decoyImage4,x,y);
    }
    else if (r < 0.5) {
      image(decoyImage5,x,y);
    }
    else if (r < 0.6) {
      image(decoyImage6,x,y);
    }
    else if (r < 0.7) {
      image(decoyImage7,x,y);
    }
    else if (r < 0.8) {
      image(decoyImage8,x,y);
    }
    else if (r < 0.9) {
      image(decoyImage9,x,y);
    }
    else if (r < 1.0) {
      image(decoyImage10,x,y);
    }
  }

   // Distance between target image and frame image
   d = dist(frameX,frameY,targetX,targetY);

   // While loop to keep the target from overlapping over the frame lost image randomizing with loops
   while (d < frameImage.width/2 && d < frameImage.height/2){
   targetX = random(0,width);
   targetY = random(0,height);
  }

   // Once we've displayed all decoys, we choose a location for the target
   targetX = random(0,width);
   targetY = random(0,height);

   // And draw it (this means it will always be on top)
   image(targetImage,targetX,targetY);
   // The position of the frame image in the top right
   var frameX = windowWidth - frameImage.width/2 - 50;
   var frameY = frameImage.height/2;


  // Display the frame lost image (image and text)

  // Display the frame image
  image(frameImage,frameX,frameY);
  // Display the target image on the frame image
  image(targetImage,frameX,frameY - 35);
  // Display and personnalise the frame text
  fill(51,51,51);
  textSize(20);
  textAlign(CENTER);
  textFont(myFont1);
  text("HAVE YOU SEEN ME?",frameX,frameY + 153);

}

function draw() {


  if (gameOver) {

    // Background color
    background("#ffff8c");

    // Typography informations
    textSize(100);
    textAlign(CENTER,CENTER);
    noStroke();
    fill(random(255));
    textFont(myFont1);
    // Tell them they won!
    text("YOU WON!",width/2,height/2);
    // Prepare our second typography
    textSize(40);
    textAlign(CENTER,CENTER);
    noStroke();
    fill(random(255));
    textFont(myFont2);
    // Tell them a short description for playing again
    text("Press ENTER to play again",width/2,height/1.7);

    // Increase the target image size
    targetSize += targetSizeIncrease;
    // Moves to the target image location
    translate(targetX, targetY);
    // Give the time for the jitter animation for the target rotation
    if (second() % 2 == 0) {
    jitter = random(-0.1, 0.1);
    }
    // Increase the angle value using the most recent jitter value
    angle = angle + jitter;
    // Use cosine to get a smooth CW and CCW motion when not jittering
    var c = cos(angle);
    // Apply the final rotation
    rotate(c);
    // Displays the target image over the game screen
    image(targetImage,0,0,targetImage.width + targetSize,targetImage.height + targetSize);

    // Makes the target image big or small within a limited range
    if (targetSize <= -25 || targetSize >= 250) {
     targetSizeIncrease = -targetSizeIncrease;
    }
    // Makes the target image moving/jumping
    targetX = width * noise(t);
    targetY = height * noise(t);
    // The speed of the moving/jumping animation
    t += 0.01;

    // Displays the target image on the game over screen
    noFill();
    stroke(random(255));
    strokeWeight(10);
    ellipse(0,0,targetImage.width + targetSize, targetImage.height + targetSize);

  }

}

// mousePressed()
//
// Checks if the player clicked on the target and if so tells them they won
function mousePressed() {
  // Check if the mouse is in the x range of the target
  if (mouseX > targetX - targetImage.width/2 && mouseX < targetX + targetImage.width/2) {
    // Check if the mouse is also in the y range of the target
    if (mouseY > targetY - targetImage.height/2 && mouseY < targetY + targetImage.height/2) {
      gameOver = true;
    }
  }
}

// keyPressed()
//
// Give the player the option to play again by pressing Enter
function keyPressed() {
       // Reloads the page if the player presses enter
       if (keyIsDown(ENTER)) {
      location.reload();
     }
}

// windowResized()
//
// Make the screen resizable for better adaptibility
function windowResized(){
  location.reload();
  resizeCanvas(windowWidth, windowHeight);
}
