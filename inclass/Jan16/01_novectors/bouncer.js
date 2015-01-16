
function Bouncer() {
  this.pos = createVector(width/2,height/2);
  this.vel = createVector(0.7, 3);
  this.r = 16;

  this.display = function() {
    fill(255);
    ellipse(this.x,this.y,this.r*2,this.r*2);
  }

  this.move = function() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }
}