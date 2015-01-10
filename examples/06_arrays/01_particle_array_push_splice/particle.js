function Particle(tempX, tempY) {
  this.x = tempX;
  this.y = tempY;
  this.col = 255;


  this.display = function() {
    stroke(255);
    fill(255, 100);
    ellipse(this.x, this.y, 28, 28);
  }

  this.move = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
    if (this.y < 0) {
      this.y = height;
    } 

    if (this.y > height) {
      this.y = 0;
    }
    if (this.x < 0) {
      this.x = width;
    } 

    if (this.x > width) {
      this.x = 0;
    }
  }
}
