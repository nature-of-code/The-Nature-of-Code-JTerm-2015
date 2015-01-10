
function Particle(tempX, tempY) {
  this.pos = {
    x: tempX,
    y: tempY
  }
  this.history = [];
  

  this.display = function() {
    ellipse(this.pos.x, this.pos.y, 8, 8);
    noFill();
    stroke(255);
    beginShape();
    for (var i = 0; i < this.history.length; i++) {
      var p = this.history[i];
      vertex(p.x,p.y); 
      p.x += random(-1,1);
      p.y += random(-1,1);
    }
    endShape();
  }

  this.move = function() {
    var pcopy = Object.create(this.pos);
    this.history.push(pcopy);
    this.pos.x += random(-10, 10);
    this.pos.y += random(-10, 10);
    
    if (this.history.length > 50) {
      this.history.splice(0,1); 
    }
  }
}
