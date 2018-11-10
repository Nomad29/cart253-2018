// Ball and Badball
//
// A class to define how a ball behaves. Including bouncing on the top
// and bottom edges of the canvas, going off the left and right sides,
// and bouncing off paddles.

// Ball constructor
//
// Sets the properties with the provided arguments
function Ball(x,y,vx,vy,size,speed) {
  this.x = x;
  this.y = y;
  this.vx = vx = 4.5;
  this.vy = vy = 4.5;
  this.size = size;
  this.speed = speed;
}

// Badball constructor
//
// Sets the properties with the provided arguments
function Badball(x,y,vx,vy,size,speed) {
  this.x = x;
  this.y = y;
  this.vx = vx = 2;
  this.vy = vy = 2;
  this.size = size *1.5;
  this.speed = speed;
}

// update() Ball
//
// Moves according to velocity, constrains y to be on screen,
// checks for bouncing on upper or lower edgs, checks for going
// off left or right side.
Ball.prototype.update = function () {
  // Update position with velocity
  this.x += this.vx;
  this.y += this.vy;

  // Constrain y position to be on screen
  this.y = constrain(this.y,0,height-this.size);

  // Check for touching upper or lower edge and reverse velocity if so
  if (this.y === 0 || this.y + this.size === height) {
    this.vy = -this.vy;
  }
}

// update() Badball
//
// Move the Badball the same as the Ball, but it's constrain in the game screen
Badball.prototype.update = function()  {
  // Update position with velocity
  this.x += this.vx;
  this.y += this.vy;

  // Constrain y position to be on screen
  this.y = constrain(this.y,0,height-this.size);
  this.x = constrain(this.x,0,width-this.size);

  // Check for touching upper or lower edge and reverse velocity if so
  if (this.y === 0 || this.y + this.size === height) {
    this.vy = -this.vy;
  }
}

// isOffScreen() Ball
//
// Checks if the ball has moved off the screen and, if so, returns true.
// Otherwise it returns false.
Ball.prototype.isOffScreen = function () {
  // Check for going off screen and reset if so
  if (this.x + this.size < 0 || this.x > width) {
    return true;
  }
  else {
    return false;
  }
}

// isOffScreen() Badball
//
// Checks if the spikyball has moved off the screen and, if so, returns true.
// Otherwise it returns false.
Badball.prototype.isOffScreen = function () {
  // Check for going off screen and reset if so
  if (this.x + this.size < 0 || this.x > width) {
    return true;
  }
  else {
    return false;
  }
}

// display() Ball
//
// Draw the ball as an ellipse on the screen
Ball.prototype.display = function () {
  fill(255);
  ellipse(this.x,this.y,this.size,this.size);
}

// display() Badball
//
// Display the Badball as a spiky ball the players need to avoid
Badball.prototype.display = function(spikyImage) {
  image(spikyImage,this.x,this.y,this.size,this.size);
}

// handleCollision(paddle) Ball
//
// Check if this ball overlaps the paddle passed as an argument
// and if so reverse x velocity to bounce
Ball.prototype.handleCollision = function(paddle) {
  // Check if the ball overlaps the paddle on x axis
  if (this.x + this.size > paddle.x && this.x < paddle.x + paddle.w) {
    // Check if the ball overlaps the paddle on y axis
    if (this.y + this.size > paddle.y && this.y < paddle.y + paddle.h) {
      // If so, move ball back to previous position (by subtracting current velocity)
      this.x -= this.vx;
      this.y -= this.vy;
      // Reverse x velocity to bounce
      this.vx = -this.vx;
      // Play the beep sound when the ball collides with the paddles
      beepSound.play();
    }
  }
}

// handleCollision(paddle) Badball
//
// Check if the Badball overlaps the paddle passed as an argument
// If a player's paddle touch the Badball, he will get slow and the Badball will reset
Badball.prototype.handleCollision = function(paddle) {
  // Check if the ball overlaps the paddle on x axis
  if (this.x + this.size > paddle.x && this.x < paddle.x + paddle.w) {
    // Check if the ball overlaps the paddle on y axis
    if (this.y + this.size > paddle.y && this.y < paddle.y + paddle.h) {
      // If so, move ball back to previous position (by subtracting current velocity)
      this.x -= this.vx;
      this.y -= this.vy;
      paddle.slowy();
      this.reset();
      // Reverse x velocity to bounce
      this.vx = -this.vx;
    }
  }
}

// reset() Ball
//
// Set position back to the middle of the screen
Ball.prototype.reset = function () {
  this.x = width/2;
  this.y = height/2;
}

// reset() Badball
//
// Set the position back to some random place in the game screen
Badball.prototype.reset = function() {
  this.x = random(162,325);
  this.y = random(100,300);
}
