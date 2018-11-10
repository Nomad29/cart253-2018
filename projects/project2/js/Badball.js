// Badball
//
// A class to define how a ball behaves. Including bouncing on the top
// and bottom edges of the canvas, going off the left and right sides,
// and bouncing off paddles.

// Badball constructor
//
// Sets the properties with the provided arguments
function Badball(x,y,vx,vy,size,speed) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.size = size;
  this.speed = speed;
}

// display()
//
// Display the Badball as a spiky ball the players need to avoid
Badball.prototype.display = function(spikyImage) {
  image(spikyImage, this.x, this.y, this.size, this.size);
}
