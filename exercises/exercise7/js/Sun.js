// Sun
//
// A class to define how the suns behave. Includes gradient and noise
// sine cosine animation.

// Sun constructor
//
// Sets the properties with the provided arguments
function Sun() {
  this.sunGraphics = createGraphics(400, 400);
  this.sunGraphics.parent('sun');
  // Sets the sun gradient animation
  this.sunGradient = canvas.drawingContext;
  // Number of vertex in the sun circle
  this.sunVertexResolution = 260;
  // Size of the sun
  this.sunRadius = 800;
  // Sun animation base time
  this.sunTime = 0;
  // Fastness of the sun animation
  this.sunTimeChange = .005;
  // Sun base noise value for cosine
  this.sunX = 0;
  // Sun base noise value for sine
  this.sunY = 0;
  // Sun noise value
  this.nSunVal;
  // Sun wobbly base noise intensity
  this.nSunInt = 0;
  // Sun wobbly base noise amplitude
  this.nSunAmp = 0;
  // Sun variable for containing the animated gradient
  this.sunGradient;
  // Sun variable for allowing the gradient to animate
  this.sunGradientAnim = 1;
  // Sun X gradient
  this.gradX;
  // Sun Y gradient
  this.gradY;
  // Sun gradient
  this.gradient;
  // Sun first gradient color
  this.sun1 = sun1 = color(255, 239, 101);
  // Sun second gradient color
  this.sun2 = sun2 = color(255, 87, 27);
}

// display() Sun
//
// Draw the sun as a graphic element on the screen
Sun.prototype.display = function() {
  // A paper white background color
  background(245);
  // Center the sun in the canvas
  translate(width / 2, height / 2);
  // Sun wobbly noise number of details
  noiseDetail(5);

  // Allow user to move the radial gradient with the mouse
  this.gradX = -mouseX / 4 - width / 2;
  this.gradY = -mouseY / 4 - height / 2;
  // Creates the radial gradient
  this.gradient = this.sunGradient.createRadialGradient(0, 0, 150, this.gradX, this.gradY, 0);
  // Allow to animated the radial gradiant with rotation
  rotate(map(sin(this.sunGradientAnim), -1, 1, -PI / 4, PI / 4));
  // Adds gradient color 2
  this.gradient.addColorStop(0, this.sun2);
  // Adds gradient color 1
  this.gradient.addColorStop(0.35, this.sun1);
  // Allow to unify the radial gradient with the animations
  this.sunGradient.fillStyle = this.gradient;
  // Creates the animation pace
  this.sunGradientAnim += 0.025;

  // Sun wobbly changed noise intensity after clear()
  this.nSunInt = 0.1;
  // Sun wobbly changed noise amplitude after clear()
  this.nSunAmp = 0.1;

  // Begins the sun wobbly animation
  beginShape();
  // Makes the sun a circle by forming with 2 TWO_PI and apply the vertex to it
  for (a = 0; a <= TWO_PI; a += TWO_PI / this.sunVertexResolution) {
    // Map noise value to match the amplitude
    this.nSunVal = map(noise(cos(a) * this.nSunInt + 0.1, sin(a) * this.nSunInt + 0.1, this.sunTime), 0.0, 0.1, 0.1, 0.11);

    // Calculates the noise values for the sun X to wobbles with cosine
    this.sunX = cos(a) * this.sunRadius * this.nSunVal;
    // Calculates the noise values for the sun Y to wobbles with sine
    this.sunY = sin(a) * this.sunRadius * this.nSunVal;

    // The vertex of the sun are calculated by the noise lines of sunX and sunY above
    vertex(this.sunX, this.sunY);
  }
  // Ends the sun wobbly animation
  endShape(CLOSE);

  // Allows the sun wobbly animation to vary with time
  this.sunTime += this.sunTimeChange;

}
