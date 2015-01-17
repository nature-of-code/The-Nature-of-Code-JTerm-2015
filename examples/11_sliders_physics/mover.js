// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var Mover = function(mass, x, y) {
  this.position = createVector(x, y);
  this.velocity = createVector(1, 0);
  this.acceleration = createVector(0, 0);
  this.mass = mass;

  this.applyForce = function(force) {
    var f = p5.Vector.div(force,this.mass);
    this.acceleration.add(f);
  };
    
  this.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  };

  this.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(255, 175);
    // Using the slider value!
    var d = this.mass * sizeSlider.value();
    ellipse(this.position.x, this.position.y, d, d);
  };
};
  

