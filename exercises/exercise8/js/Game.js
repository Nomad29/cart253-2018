// Game
//
// A class to define how the game behave. Includes key/mouse events,
// scenario event transitions, etc.

// Game constructor
//
// Sets the properties with the provided arguments
function Game() {
// Nothing for the moment
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

    case 3:
      // Game slide 3
      slide3();
      break;
  }

}

// prologue()
function prologue() {
  // Hide the past or future image, but let the present image to be shown
  img[1].show();
  img[2].hide();
  img[3].hide();
  img[4].hide();
  // Show the prologue title
  title1.show();
  // Hide the past or future image, but let the present image to be shown
  txt1.show();
  txt2.hide();
  txt3.hide();
  txt4.hide();
  // Scenarios buttons
  button1.hide();
  button2.hide();
  button3.hide();
  // Hide the text '(To Continue in Project 3...)'
  toContinue.hide();
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
  img[4].hide();
  // Hide the prologue title
  title1.hide();
  // Hide the past or future image, but let the present image to be shown
  txt1.hide();
  txt2.show();
  txt3.hide();
  txt4.hide();
  // Hide the prologue input and button
  input.hide();
  button.hide();
  // Scenarios buttons
  button1.show();
  button2.show();
  button3.hide();
  // Hide the text '(To Continue in Project 3...)'
  toContinue.hide();
  // A paper white background color
  background(245);
  // Display the image
  image(img[2],0,0);
}

// slide2()
function slide2() {
  // Hide the past or future image, but let the present image to be shown
  img[1].hide();
  img[2].hide();
  img[3].show();
  img[4].hide();
  // Hide the prologue title
  title1.hide();
  // Hide the past or future image, but let the present image to be shown
  txt1.hide();
  txt2.hide();
  txt3.show();
  txt4.hide();
  // Hide the prologue input and button
  input.hide();
  button.hide();
  // Scenarios buttons
  button1.hide();
  button2.hide();
  button3.show();
  // Hide the text '(To Continue in Project 3...)'
  toContinue.hide();
  // A paper white background color
  background(245);
  // Display the image
  image(img[3],0,0);
}

// slide3()
function slide3() {
  // Hide the past or future image, but let the present image to be shown
  img[1].hide();
  img[2].hide();
  img[3].hide();
  img[4].show();
  // Hide the prologue title
  title1.hide();
  // Hide the past or future image, but let the present image to be shown
  txt1.hide();
  txt2.hide();
  txt3.hide();
  txt4.show();
  // Hide the prologue input and button
  input.hide();
  button.hide();
  // Scenarios buttons
  button1.hide();
  button2.hide();
  button3.hide();
  // Show the text '(To Continue in Project 3...)'
  toContinue.show();
  // A paper white background color
  background(245);
  // Display the image
  image(img[4],0,0);
  // Display the text '(To Continue in Project 3...)'
  text(toContinue);
}
