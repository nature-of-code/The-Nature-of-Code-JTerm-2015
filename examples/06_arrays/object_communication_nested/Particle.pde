class Particle {
  var x, y;
  var r;
  
  var col = 0;
  
  Particle(var x_, var y_, var r_) {
    x = x_;
    y = y_;
    r = r_;
  }

  function display() {
    stroke(255);
    fill(col,100);
    ellipse(x, y, r*2, r*2);
  }
  
  function change() {
    col = 255;
  }
  
  function update() {
    x += random(-2,2); 
    y += random(-2,2); 
    col = 0;
  }

  boolean overlaps(Particle other) {
    var d = dist(x, y, other.x, other.y);
    if (d < r + other.r) {
      return true;
    } else {
      return false;
    }
  }
}
