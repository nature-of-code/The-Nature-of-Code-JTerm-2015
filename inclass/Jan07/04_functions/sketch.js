
var x = 100;
var speed = 0;

function setup() {
  createCanvas(300, 200);
}

function draw() {
  background(0);
  displayCircle();
  moveCircle();
}

function displayCircle() {
  ellipse(x,100,24,24);  
}

function moveCircle() {
  x = x + speed;
}

