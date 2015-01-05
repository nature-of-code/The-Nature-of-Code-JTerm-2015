function setup() {
  // put setup code here
  createCanvas(600, 400);
}

function draw() {  
  // A line
  line(0, 0, 600, 400);
  // A rectangle
  rect(50, 100, 75, 75);
  // An ellipse
  ellipse(300, 200, 80, 80);
  // A triangle
  triangle(400, 100, 420, 100, 410, 80);
  // A point
  point(300, 200);
}