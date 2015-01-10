class Particle {
  var x;
  var y;

  Particle(var tempX, var tempY) {
    x = tempX;
    y = tempY;
  }

  function display() {
    stroke(255);
    fill(255, 100);
    ellipse(x, y, 28, 28);
  }

  function move() {
    x = x + random(-1, 1);
    y = y + random(-1, 1);
    if (y < 0) {
      y = height;
    } 

    if (y > height) {
      y = 0;
    }
    if (x < 0) {
      x = width;
    } 

    if (x > width) {
      x = 0;
    }
  }
}
