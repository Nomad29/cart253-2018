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
  this.txt5 = txt5;
  this.txt6 = txt6;
  this.txt7 = txt7;
  this.txt8 = txt8;
  this.txt9 = txt9;
  this.txt10 = txt10;
  this.txt11 = txt11;
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

    case 5:
     // Game slide 5
     slide5();
     break;

    case 6:
     // Game slide 6
     slide6();
     break;

    case 7:
     // Game slide 7
     slide7();
     break;

    case 8:
     // Game slide 8
     slide8();
     break;

    case 9:
     // Game slide 9
     slide9();
     break;

    case 10:
     // Game slide 10
     slide10();
     break;

    case 11:
     // Ending screen
     ending();
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
  this.img[5].hide();
  this.img[6].hide();
  this.img[7].hide();
  this.img[8].hide();
  this.img[9].hide();
  // Show the prologue title
  this.title1.show();
  // Hide the past or future image, but let the present image to be shown
  this.txt1.show();
  this.txt2.hide();
  this.txt3.hide();
  this.txt4.hide();
  this.txt5.hide();
  this.txt6.hide();
  this.txt7.hide();
  this.txt8.hide();
  this.txt9.hide();
  this.txt10.hide();
  this.txt11.hide();
  // Scenarios buttons
  button1.hide();
  button2.hide();
  button3.hide();
  button5.hide();
  button6.hide();
  button7.hide();
  button8.hide();
  button9.hide();
  button10.hide();
  button11.hide();
  button12.hide();
  button13.hide();
  button14.hide();
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
  this.img[5].hide();
  this.img[6].hide();
  this.img[7].hide();
  this.img[8].hide();
  this.img[9].hide();
  // Hide the prologue title
  this.title1.hide();
  // Hide the past or future image, but let the present image to be shown
  this.txt1.hide();
  this.txt2.show();
  this.txt3.hide();
  this.txt4.hide();
  this.txt5.hide();
  this.txt6.hide();
  this.txt7.hide();
  this.txt8.hide();
  this.txt9.hide();
  this.txt10.hide();
  this.txt11.hide();
  // Hide the prologue input and button
  this.input.hide();
  this.button.hide();
  // Scenarios buttons
  button1.show();
  button2.show();
  button3.hide();
  button5.hide();
  button6.hide();
  button7.hide();
  button8.hide();
  button9.hide();
  button10.hide();
  button11.hide();
  button12.hide();
  button13.hide();
  button14.hide();
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
  this.img[5].hide();
  this.img[6].hide();
  this.img[7].hide();
  this.img[8].hide();
  this.img[9].hide();
  // Hide the prologue title
  this.title1.hide();
  // Hide the past or future image, but let the present image to be shown
  this.txt1.hide();
  this.txt2.hide();
  this.txt3.show();
  this.txt4.hide();
  this.txt5.hide();
  this.txt6.hide();
  this.txt7.hide();
  this.txt8.hide();
  this.txt9.hide();
  this.txt10.hide();
  this.txt11.hide();
  // Hide the prologue input and button
  this.input.hide();
  this.button.hide();
  // Scenarios buttons
  button1.hide();
  button2.hide();
  button3.show();
  button5.hide();
  button6.hide();
  button7.hide();
  button8.hide();
  button9.hide();
  button10.hide();
  button11.hide();
  button12.hide();
  button13.hide();
  button14.hide();
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
  this.img[5].hide();
  this.img[6].hide();
  this.img[7].hide();
  this.img[8].hide();
  this.img[9].hide();
  // Hide the prologue title
  this.title1.hide();
  // Hide the past or future image, but let the present image to be shown
  this.txt1.hide();
  this.txt2.hide();
  this.txt3.hide();
  this.txt4.show();
  this.txt5.hide();
  this.txt6.hide();
  this.txt7.hide();
  this.txt8.hide();
  this.txt9.hide();
  this.txt10.hide();
  this.txt11.hide();
  // Hide the prologue input and button
  this.input.hide();
  this.button.hide();
  // Scenarios buttons
  button1.hide();
  button2.hide();
  button3.hide();
  button5.show();
  button6.show();
  button7.hide();
  button8.hide();
  button9.hide();
  button10.hide();
  button11.hide();
  button12.hide();
  button13.hide();
  button14.hide();
  // A paper white background color
  background(245);
  // Display the image
  image(this.img[4], 0, 0);
}

// slide4()
function slide4() {
  // Hide the past or future image, but let the present image to be shown
  this.img[1].hide();
  this.img[2].hide();
  this.img[3].hide();
  this.img[4].hide();
  this.img[5].show();
  this.img[6].hide();
  this.img[7].hide();
  this.img[8].hide();
  this.img[9].hide();
  // Hide the prologue title
  this.title1.hide();
  // Hide the past or future image, but let the present image to be shown
  this.txt1.hide();
  this.txt2.hide();
  this.txt3.hide();
  this.txt4.hide();
  this.txt5.show();
  this.txt6.hide();
  this.txt7.hide();
  this.txt8.hide();
  this.txt9.hide();
  this.txt10.hide();
  this.txt11.hide();
  // Hide the prologue input and button
  this.input.hide();
  this.button.hide();
  // Scenarios buttons
  button1.hide();
  button2.hide();
  button3.hide();
  button5.hide();
  button6.hide();
  button7.show();
  button8.hide();
  button9.hide();
  button10.hide();
  button11.hide();
  button12.hide();
  button13.hide();
  button14.hide();
  // A paper white background color
  background(245);
  // Display the image
  image(this.img[5], 0, 0);
}

// slide5()
function slide5() {
  // Hide the past or future image, but let the present image to be shown
  this.img[1].hide();
  this.img[2].hide();
  this.img[3].hide();
  this.img[4].hide();
  this.img[5].hide();
  this.img[6].show();
  this.img[7].hide();
  this.img[8].hide();
  this.img[9].hide();
  // Hide the prologue title
  this.title1.hide();
  // Hide the past or future image, but let the present image to be shown
  this.txt1.hide();
  this.txt2.hide();
  this.txt3.hide();
  this.txt4.hide();
  this.txt5.hide();
  this.txt6.show();
  this.txt7.hide();
  this.txt8.hide();
  this.txt9.hide();
  this.txt10.hide();
  this.txt11.hide();
  // Hide the prologue input and button
  this.input.hide();
  this.button.hide();
  // Scenarios buttons
  button1.hide();
  button2.hide();
  button3.hide();
  button5.hide();
  button6.hide();
  button7.hide();
  button8.show();
  button9.show();
  button10.hide();
  button11.hide();
  button12.hide();
  button13.hide();
  button14.hide();
  // A paper white background color
  background(245);
  // Display the image
  image(this.img[6], 0, 0);
}

// slide6()
function slide6() {
  // Hide the past or future image, but let the present image to be shown
  this.img[1].hide();
  this.img[2].hide();
  this.img[3].hide();
  this.img[4].hide();
  this.img[5].hide();
  this.img[6].hide();
  this.img[7].show();
  this.img[8].hide();
  this.img[9].hide();
  // Hide the prologue title
  this.title1.hide();
  // Hide the past or future image, but let the present image to be shown
  this.txt1.hide();
  this.txt2.hide();
  this.txt3.hide();
  this.txt4.hide();
  this.txt5.hide();
  this.txt6.hide();
  this.txt7.show();
  this.txt8.hide();
  this.txt9.hide();
  this.txt10.hide();
  this.txt11.hide();
  // Hide the prologue input and button
  this.input.hide();
  this.button.hide();
  // Scenarios buttons
  button1.hide();
  button2.hide();
  button3.hide();
  button5.hide();
  button6.hide();
  button7.hide();
  button8.hide();
  button9.hide();
  button10.show();
  button11.hide();
  button12.hide();
  button13.hide();
  button14.hide();
  // A paper white background color
  background(245);
  // Display the image
  image(this.img[7], 0, 0);
}

// slide7()
function slide7() {
  // Hide the past or future image, but let the present image to be shown
  this.img[1].hide();
  this.img[2].hide();
  this.img[3].hide();
  this.img[4].hide();
  this.img[5].hide();
  this.img[6].hide();
  this.img[7].show();
  this.img[8].hide();
  this.img[9].hide();
  // Hide the prologue title
  this.title1.hide();
  // Hide the past or future image, but let the present image to be shown
  this.txt1.hide();
  this.txt2.hide();
  this.txt3.hide();
  this.txt4.hide();
  this.txt5.hide();
  this.txt6.hide();
  this.txt7.hide();
  this.txt8.show();
  this.txt9.hide();
  this.txt10.hide();
  this.txt11.hide();
  // Hide the prologue input and button
  this.input.hide();
  this.button.hide();
  // Scenarios buttons
  button1.hide();
  button2.hide();
  button3.hide();
  button5.hide();
  button6.hide();
  button7.hide();
  button8.hide();
  button9.hide();
  button10.hide();
  button11.show();
  button12.hide();
  button13.hide();
  button14.hide();
  // A paper white background color
  background(245);
  // Display the image
  image(this.img[7], 0, 0);
}

// slide8()
function slide8() {
  // Hide the past or future image, but let the present image to be shown
  this.img[1].hide();
  this.img[2].hide();
  this.img[3].hide();
  this.img[4].hide();
  this.img[5].hide();
  this.img[6].hide();
  this.img[7].hide();
  this.img[8].show();
  this.img[9].hide();
  // Hide the prologue title
  this.title1.hide();
  // Hide the past or future image, but let the present image to be shown
  this.txt1.hide();
  this.txt2.hide();
  this.txt3.hide();
  this.txt4.hide();
  this.txt5.hide();
  this.txt6.hide();
  this.txt7.hide();
  this.txt8.hide();
  this.txt9.show();
  this.txt10.hide();
  this.txt11.hide();
  // Hide the prologue input and button
  this.input.hide();
  this.button.hide();
  // Scenarios buttons
  button1.hide();
  button2.hide();
  button3.hide();
  button5.hide();
  button6.hide();
  button7.hide();
  button8.hide();
  button9.hide();
  button10.hide();
  button11.hide();
  button12.show();
  button13.hide();
  button14.hide();
  // A paper white background color
  background(245);
  // Display the image
  image(this.img[8], 0, 0);
}

// slide9()
function slide9() {
  // Hide the past or future image, but let the present image to be shown
  this.img[1].hide();
  this.img[2].hide();
  this.img[3].hide();
  this.img[4].hide();
  this.img[5].hide();
  this.img[6].hide();
  this.img[7].hide();
  this.img[8].show();
  this.img[9].hide();
  // Hide the prologue title
  this.title1.hide();
  // Hide the past or future image, but let the present image to be shown
  this.txt1.hide();
  this.txt2.hide();
  this.txt3.hide();
  this.txt4.hide();
  this.txt5.hide();
  this.txt6.hide();
  this.txt7.hide();
  this.txt8.hide();
  this.txt9.hide();
  this.txt10.show();
  this.txt11.hide();
  // Hide the prologue input and button
  this.input.hide();
  this.button.hide();
  // Scenarios buttons
  button1.hide();
  button2.hide();
  button3.hide();
  button5.hide();
  button6.hide();
  button7.hide();
  button8.hide();
  button9.hide();
  button10.hide();
  button11.hide();
  button12.hide();
  button13.show();
  button14.hide();
  // A paper white background color
  background(245);
  // Display the image
  image(this.img[8], 0, 0);
}

// slide10()
function slide10() {
  // Hide the past or future image, but let the present image to be shown
  this.img[1].hide();
  this.img[2].hide();
  this.img[3].hide();
  this.img[4].hide();
  this.img[5].hide();
  this.img[6].hide();
  this.img[7].hide();
  this.img[8].hide();
  this.img[9].show();
  // Hide the prologue title
  this.title1.hide();
  // Hide the past or future image, but let the present image to be shown
  this.txt1.hide();
  this.txt2.hide();
  this.txt3.hide();
  this.txt4.hide();
  this.txt5.hide();
  this.txt6.hide();
  this.txt7.hide();
  this.txt8.hide();
  this.txt9.hide();
  this.txt10.hide();
  this.txt11.show();
  // Hide the prologue input and button
  this.input.hide();
  this.button.hide();
  // Scenarios buttons
  button1.hide();
  button2.hide();
  button3.hide();
  button5.hide();
  button6.hide();
  button7.hide();
  button8.hide();
  button9.hide();
  button10.hide();
  button11.hide();
  button12.hide();
  button13.hide();
  button14.show();
  // A paper white background color
  background(245);
  // Display the image
  image(this.img[9], 0, 0);
}

// ending()
function ending() {
  // Redirect to the end-game screen
  endGame();
}
