
var x = 100;
var speed = 10;
var c;

function setup() {
  createCanvas(300, 200);
  c = color(0, 255, 0);
}

function draw() {
  background(0);
  fill(c);
  ellipse(x,100,24,24);
  x = x + speed;
  
  // If we reach the right edge
  if (x > width) {
    // Make sure we don't get stuck offscreen
    x = width;
    // Pick a new color
    c = color(random(255),random(255),random(255));
    // Reverse and dampen speed
    speed = speed * -0.9;
  } else if (x < 0) {
    x = 0;
    speed = speed * -0.9;
  }
}

