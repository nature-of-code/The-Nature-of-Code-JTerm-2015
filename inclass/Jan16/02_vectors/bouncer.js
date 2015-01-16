
function Bouncer() {
  this.pos = createVector(width/2,height/2);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.r = 16;

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.move = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.vel.mult(0.99);


    if (this.pos.y > height) {
      this.pos.y = height;
      this.vel.y *= -1;
    }
    if (this.pos.x > width) {
      this.pos.x = width;
      this.vel.x *= -1;
    }
  }



  this.display = function() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.r*2,this.r*2);
  }
}





