

function Particle(tempX, tempY) {
  this.x = tempX;
  this.y = tempY;
  this.r = 32;

  this.display = function() {
    fill(255);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }
  
  this.over = function(mx, my) {
    var d = dist(mx,my,this.x,this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }
  
  this.change = function() {
    this.r = random(24,48); 
  }


}

