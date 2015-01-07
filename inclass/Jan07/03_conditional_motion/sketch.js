
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

  if (x > width) {
    x = width;
    c = color(random(255),random(255),random(255));
    speed = speed * -0.9;
  } else if (x < 0) {
    x = 0;
    speed = speed * -0.9;
  }
}

