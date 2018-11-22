// Game
//
// A class to define how the game behave. Includes key/mouse events,
// scenario event transitions, etc.

// Game constructor
//
// Sets the properties with the provided arguments
function Game() {

}

Game.prototype.display = function() {

  //scenario = {}
  // Let the user switch between the game content
  switch (scenario) {
    case 0:
      // Prologue screen
      prologue();
      break;

    case 1:
      // Game slide 1
      slide1();
      break;

    case 2:
      // Game slide 2
      slide2();
      break;
  }

}

// prologue()
function prologue() {
  // Hide the past or future image, but let the present image to be shown
  img[1].show();
  img[2].hide();
  img[3].hide();
  // Show the prologue title
  title1.show();
  // Hide the past or future image, but let the present image to be shown
  txt1.show();
  txt2.hide();
  txt3.hide();
  // A paper white background color
  background(245);
  // Display the text 'Prologue'
  text(title1);
  // Display the image
  image(img[1],0,0);
}

// slide1()
function slide1() {
  // Hide the past or future image, but let the present image to be shown
  img[1].hide();
  img[2].show();
  img[3].hide();
  // Hide the prologue title
  title1.hide();
  // Hide the past or future image, but let the present image to be shown
  txt1.hide();
  txt2.show();
  txt3.hide();
  // Hide the prologue input and button
  input.hide();
  button.hide();
  // A paper white background color
  background(245);
  // Display the image
  image(img[2],0,0);
}
