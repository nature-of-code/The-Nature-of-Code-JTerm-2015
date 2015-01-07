
var canvas;
var button;

function setup() {
  canvas = createCanvas(100,100);
  button = createButton("submit");
  button.position(10,120);
  button.mousePressed(makeItRed);
  background(0);
}

function makeItRed() {
  background(255,0,0);
}

function draw() {

}