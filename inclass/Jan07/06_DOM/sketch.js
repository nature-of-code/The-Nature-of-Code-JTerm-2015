
var canvas;
var button;

function setup() {
  // Make a canvas
  canvas = createCanvas(100,100);

  // Make an HTML DOM element, a button!
  // The button will have the word "submit" in it
  button = createButton("submit");
  // Set the position in the browser window (separate from the canvas)
  button.position(10,120);
  // The function "makeItRed" is a callback for
  // when the button is pressed
  button.mousePressed(makeItRed);
  background(0);
}

function makeItRed() {
  background(255,0,0);
}

function draw() {

}