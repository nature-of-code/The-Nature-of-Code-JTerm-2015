
var particles = [];

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(0);
  particles.push(new Particle(random(width), random(height)));

  for (var i = 0; i < particles.length; i++) {
    particles[i].move();
    particles[i].display();
  }
  
  if (particles.length > 50) {
    particles.splice(0,1);
  }
  
}
