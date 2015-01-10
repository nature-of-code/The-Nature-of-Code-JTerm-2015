

function Particle(tempX, tempY, tempR) {
  this.x = tempX;
  this.y = tempY;
  this.r = tempR;

  this.display = function() {
    noFill();
    strokeWeight(2);
    stroke(255);
    ellipse(this.x, this.y, this.r*2, this.r*2);
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

