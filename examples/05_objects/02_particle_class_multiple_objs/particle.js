

function Particle(tempX) {
  this.x = tempX; // x = 300;
  this.y = 0;
  this.xspeed = random(-1,1);
  this.yspeed = 0;

  this.display = function() {
    fill(255);
    ellipse(this.x, this.y, 28, 28);
  }
  
  //function functions
  this.move = function() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
    this.yspeed = this.yspeed + 0.1;
    
    if (this.y > height) {
      this.y = -20;
      this.yspeed = 0;
      this.xspeed = random(-1,1);
    } 
  }
}

