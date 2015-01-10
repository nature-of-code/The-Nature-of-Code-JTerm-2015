
function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(0);

  var x = 300;
  var y = 250;
  var r1 = 100;
  var r2 = 50;
  if (overlaps(x, y, r1, mouseX, mouseY, r2)) {
    background(255, 0, 0);
  }

  noFill();
  stroke(255);
  ellipse(x, y, r1*2, r1*2);
  ellipse(mouseX, mouseY, r2*2, r2*2);
}

function overlaps(x1, y1, r1, x2, y2, r2) {
  var d = dist(x1, y1, x2, y2);
  if (d < r1 + r2) {
    return true;
  } else {
    return false;
  }
}
