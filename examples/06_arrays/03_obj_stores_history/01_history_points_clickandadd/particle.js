
function Particle(tempX, tempY) {
  this.pos = {
    x: tempX,
    y: tempY
  }
  this.history = [];
  

  this.display = function() {
    stroke(255);
    fill(255);
    ellipse(this.pos.x, this.pos.y, 8, 8);
    noFill();
    beginShape();
    for (var i = 0; i < this.history.length; i++) {
      var p = this.history[i];
      vertex(p.x,p.y); 
    }
    endShape();
  }

  this.move = function() {
    var previous = {
      x: this.pos.x,
      y: this.pos.y
    }
    this.history.push(previous);
    this.pos.x += random(-10, 10);
    this.pos.y += random(-10, 10);
    
    if (this.history.length > 50) {
      this.history.splice(0,1); 
    }
  }
}
