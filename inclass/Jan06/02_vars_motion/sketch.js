
var x = 100;
var speed = 5;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  ellipse(x,200,100,100);
  x = x + speed;
}

function mousePressed() {
  speed = -5;
}

