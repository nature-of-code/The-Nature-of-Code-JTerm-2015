// Three variables
var x = 300;
var y = 200;
var a = 0;

function setup() {
  createCanvas(600, 400);
  // This example will consider angles in degrees
  angleMode(DEGREES);
}

function draw() {
  background(0);
  rectMode(CENTER);

  // save the transformation state
  push();
  translate(x,y);
  // map the mouse X location to a value for scale
  var s = map(mouseX, 0, 600, 4, 1);
  scale(s);
  rotate(a);
  fill(255,0,0);
  rect(0,0,100,50);
  // restore transformation state
  pop();
  
  // Another shape
  push();
  translate(150,50);
  rotate(-a);
  rect(0,0, 24, 24);
  pop();
  
  // Increment angle
  a = a + 1;
}
