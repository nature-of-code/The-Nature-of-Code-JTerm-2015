function Particle(x_, y_, r_) {
  this.x = x_;
  this.y = y_;
  this.r = r_;
  this.col = 0;

  this.display = function() {
    stroke(255);
    fill(this.col,100);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }
  
  this.change = function() {
    this.col = 255;
  }
  
  this.update = function() {
    this.x += random(-2,2); 
    this.y += random(-2,2); 
    this.col = 0;
  }

  this.overlaps = function(other) {
    var d = dist(this.x, this.y, other.x, other.y);
    if (d < this.r + other.r) {
      return true;
    } else {
      return false;
    }
  }
}
