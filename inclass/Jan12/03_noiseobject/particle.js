
function Particle() {
  this.x = 0;
  this.y = 0;
  this.t1 = 0;
  this.t2 = 10000;

  this.update = function() {
    this.x = noise(this.t1)*width
    this.y = noise(this.t2)*height;
    this.t1 += 0.02;
    this.t2 += 0.02;
  }

  this.display = function() {
    stroke(255);
    fill(255,100);
    ellipse(this.x,this.y,16,16);
  }
}