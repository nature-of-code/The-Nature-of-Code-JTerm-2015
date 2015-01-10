
var x;
var y;
var yspeed = 0;
var xspeed = 0;

function setup() {
  createCanvas(600,400);
  x = 300;
  y = 0;
}

function draw() {
  background(0);
  
  fill(255);
  ellipse(x,y,16,16);
  
  y = y + yspeed;
  x = x + xspeed;

  yspeed = yspeed + 0.1;
}
