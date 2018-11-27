// Game
//
// A class to define how the game behave. Includes key/mouse events,
// scenario event transitions, etc.

// Game constructor
//
// Sets the properties with the provided arguments
function Game() {
  this.img = img;
  this.title1 = title1;
  this.txt1 = txt1;
  this.txt2 = txt2;
  this.txt3 = txt3;
  this.txt4 = txt4;
  this.input = input;
  this.button = button;
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

    case 4:
     // Game slide 4
     slide4();
     break;
  }

}

// prologue()
function prologue() {
  // Hide the past or future image, but let the present image to be shown
  this.img[1].show();
  this.img[2].hide();
  this.img[3].hide();
  this.img[4].hide();
  // Show the prologue title
  this.title1.show();
  // Hide the past or future image, but let the present image to be shown
  this.txt1.show();
  this.txt2.hide();
  this.txt3.hide();
  this.txt4.hide();
  // Scenarios buttons
  button1.hide();
  button2.hide();
  button3.hide();
  // A paper white background color
  background(245);
  // Display the text 'Prologue'
  text(this.title1);
  // Display the image
  image(this.img[1], 0, 0);
}

// slide1()
function slide1() {
  // Hide the past or future image, but let the present image to be shown
  this.img[1].hide();
  this.img[2].show();
  this.img[3].hide();
  this.img[4].hide();
  // Hide the prologue title
  this.title1.hide();
  // Hide the past or future image, but let the present image to be shown
  this.txt1.hide();
  this.txt2.show();
  this.txt3.hide();
  this.txt4.hide();
  // Hide the prologue input and button
  this.input.hide();
  this.button.hide();
  // Scenarios buttons
  button1.show();
  button2.show();
  button3.hide();
  // A paper white background color
  background(245);
  // Display the image
  image(this.img[2], 0, 0);
}

// slide2()
function slide2() {
  // Hide the past or future image, but let the present image to be shown
  this.img[1].hide();
  this.img[2].hide();
  this.img[3].show();
  this.img[4].hide();
  // Hide the prologue title
  this.title1.hide();
  // Hide the past or future image, but let the present image to be shown
  this.txt1.hide();
  this.txt2.hide();
  this.txt3.show();
  this.txt4.hide();
  // Hide the prologue input and button
  this.input.hide();
  this.button.hide();
  // Scenarios buttons
  button1.hide();
  button2.hide();
  button3.show();
  // A paper white background color
  background(245);
  // Display the image
  image(this.img[3], 0, 0);
}

// slide3()
function slide3() {
  // Hide the past or future image, but let the present image to be shown
  this.img[1].hide();
  this.img[2].hide();
  this.img[3].hide();
  this.img[4].show();
  // Hide the prologue title
  this.title1.hide();
  // Hide the past or future image, but let the present image to be shown
  this.txt1.hide();
  this.txt2.hide();
  this.txt3.hide();
  this.txt4.show();
  // Hide the prologue input and button
  this.input.hide();
  this.button.hide();
  // Scenarios buttons
  button1.show();
  button2.hide();
  button3.hide();
  // A paper white background color
  background(245);
  // Display the image
  image(this.img[4], 0, 0);
}

// slide4()
function slide4() {
  // Redirect to the end-game screen
  endGame();
}
