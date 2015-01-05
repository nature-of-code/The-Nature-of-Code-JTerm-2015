
// You can declare more than one variable in a line
var x, y;
var r, g, b;
var d;

function setup() {
  createCanvas(600, 360);
  background(255);
}

function draw() {

  // Set all values randomly
  r = random(255);
  g = random(255);
  b = random(255);

  x = random(width);
  y = random(height);

  d = random(2, 20);
  // Draw one circle per frame
  noStroke();
  fill(r, g, b, 100);
  ellipse(x, y, d, d);
}

