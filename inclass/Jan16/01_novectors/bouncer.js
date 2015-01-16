
function Bouncer() {
  this.x = width/2;
  this.y = height/2;
  this.xspeed = 0.7;
  this.yspeed = 3;
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