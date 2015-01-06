
var x;
var speed = 5;

function setup() {
  createCanvas(600, 400);
  randomSeed(99);
  x = 0;
}

function draw() {
  background(0);
  ellipse(x,200,100,100);
  speed = random(-2,5);
  x = x + speed;
}
