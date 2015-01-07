// Demonstrating modularity

var x = 100;
var speed = 1;

function setup() {
  createCanvas(300, 200);
}

function draw() {
  background(0);
  // This sketch is divided into two parts
  displayCircle();
  moveCircle();
}

function displayCircle() {
  ellipse(x,100,24,24);  
}

function moveCircle() {
  x = x + speed;
}

