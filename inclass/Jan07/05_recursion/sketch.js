
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  displayCircle(300,200,200);
  displayCircle(300,50,100);

}

function displayCircle(x,y,d) {
  noFill();
  stroke(255);
  ellipse(x,y,d,d);
  if (d > 10) {
    displayCircle(x+d/2,y,d/2,d/2);
    displayCircle(x-d/2,y,d/2,d/2);
    displayCircle(x,y+d/2,d/2,d/2);
  }
}


