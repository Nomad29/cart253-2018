// Exercise 0 - Spiritual Self-Portrait
// Pippin Barr
// 20 August 2018
//
// Uses p5's set of shape and colour functions to draw a head
// wearing a hat that Pippin claims is spiritually just like him.


// setup()
//
// Draws a beautiful face on the canvas and puts a hat on it!

function setup() {

  // Set up the canvas and give it a nice pink colour

  createCanvas(500,500);
  background(2,166,167);

  // No stroke because shapes look nicer without it I think
  noStroke();
  fill(12,12,12);
  // The ellipse mode will make it easier to align everything
  ellipseMode(CENTER);
  // Draw the shirt body
  ellipse(250,495,320,230);
  // Set the hair colour
  fill(61,41,34);
  // Draw the bottom hair
  quad(250, 100, 390, 390, 220, 390, 100, 390);
  // Draw the top hair
  ellipse(250,230,300,300);
  // Set the nice darker pink
  fill(247, 178, 178);
  // Draw the neck
  rect(195,210,110,200);

  // Draw the head and body (or is it a chin?) in pink as well

  // No stroke because shapes look nicer without it I think
  noStroke();
  // Set the nice pink
  fill(255,190,190);
  // The ellipse mode will make it easier to align everything
  ellipseMode(CENTER);
  // Draw the head
  ellipse(250,230,200,200);
  // Draw the jaw
  ellipse(250,280,180,180);

  // Draw the googly eyes

  // Draw the eyelashes of the eyes
  fill(35,32,30);
  ellipse(200,223,45,32);
  ellipse(300,223,45,32);

  // Draw the white backgrounds of the eyes
  fill(255);
  ellipse(200,225,45,26);
  ellipse(300,225,45,26);

  // Draw the colored iris
  fill(76,39,22);
  ellipse(200,225,25,25);
  ellipse(300,225,25,25);

  // Draw the black pupils
  fill(0);
  ellipse(200,225,12,12);
  ellipse(300,225,12,12);

  // Draw the nose

  // Nose colour
  fill(255,150,150);
  // Main nose part
  ellipse(250,250,25,70);
  // The two nostril areas
  ellipse(235,275,20,15);
  ellipse(265,275,20,15);

  // Draw the mouth our of an ellipse and a dividing line

  // Lip colour
  fill(250,150,150);
  // Lips
  ellipse(250,320,72,20);
  // Lip divider colour and size
  stroke(255,100,100);
  strokeWeight(3);
  // Lip divider
  line(217,318,283,318);

  // Draw the eyebrows


  // Left Eyebrow line colour and size
  stroke(35,32,32);
  strokeWeight(7);
  // Left Eyebrow line
  line(175,200,225,200);

  // Right Eyebrow line colour and size
  stroke(35,32,32);
  strokeWeight(7);
  // Right Eyebrow line
  line(270,200,325,200);

  // Draw the mouth philtrum
  noStroke();
  // Philtrum colour
  fill(255,190,190);
  // Draw the philtrum
  triangle(200,290,290,290,250,313);

  // Draw the hat as a main part, brim, and hat band

  noStroke();
  // Hat colour
  fill(196,0,0);
  // Main part of hat
  rect(205,10,90,90);
  // Hat brim colour
  fill(35,35,35);
  // Hat brim
  rect(205,100,90,10);
  // Band colour
  fill(219,162,48);
  // Hat band
  rect(195,20,10,110);
}

// draw()
//
// Does nothing.

function draw() {
  // Nothing here for now.
}
