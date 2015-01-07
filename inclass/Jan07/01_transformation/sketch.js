var x = 300;
var y = 200;
var a = 0;

function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  rectMode(CENTER);

  push();
  translate(x,y);

  var s = map(mouseX, 0, 600, 4, 1);
  scale(s);
  rotate(a);
  fill(255,0,0);
  rect(0,0,100,50);
  pop();
  
  push();
  translate(150,50);
  rotate(-a);
  rect(0,0, 24, 24);
  pop();

  a = a + 1;
}
