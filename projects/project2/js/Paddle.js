// Paddle
//
// A class that defines how a paddle behaves, including the ability
// to specify the input keys to move it up and down

// Paddle constructor
//
// Sets the properties with the provided arguments or defaults
function Paddle(x,y,w,h,speed,downKey,upKey,score) {
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.w = w;
  this.h = h;
  this.speed = speed;
  this.downKey = downKey;
  this.upKey = upKey;
  // Add the variable for making possible to score
  this.score = score;
}

// handleInput()
//
// Check if the up or down keys are pressed and update velocity
// appropriately
Paddle.prototype.handleInput = function() {
  if (keyIsDown(this.upKey)) {
    this.vy = -this.speed;
  }
  else if (keyIsDown(this.downKey)) {
    this.vy = this.speed;
  }
  else {
    this.vy = 0;
  }
}

// update()
// Update y position based on velocity
// Constrain the resulting position to be within the canvas
Paddle.prototype.update = function() {
  this.y += this.vy;
  this.y = constrain(this.y,0,height-this.h);
}

// display()
//
// Draw the paddle as a rectangle on the screen
Paddle.prototype.display = function() {
  fill(255);
  rect(this.x,this.y,this.w,this.h);
}

// slowy()
//
// Draw the function for rendering the players slow when touching the spiky ball
Paddle.prototype.slowy = function() {
  this.speed -= 1;
}

// LeftScore()
//
// Draw the function rendering the score for the left paddle player
Paddle.prototype.leftScore = function () {
  // Create the player score in the score circle
  document.getElementById("circle4").textContent = leftPaddle.score;
  document.getElementById("circle3").textContent = leftPaddle.score;
  document.getElementById("total2").textContent = leftPaddle.score * 3;
}

// rightScore()
//
// Draw the function rendering the score for the right paddle player
Paddle.prototype.rightScore = function () {
  // Create the player score in the score circle
  document.getElementById("circle2").textContent = rightPaddle.score;
  document.getElementById("circle1").textContent = rightPaddle.score;
  document.getElementById("total1").textContent = rightPaddle.score * 3;
}
