var particles;

function setup() {
  createCanvas(400, 300);
  particles = new Array(100);
  for (var i = 0; i < particles.length; i++) {
    particles[i] = new Particle(random(width), random(height));
  }
}

function draw() {
  background(0);

  for (var i = 0; i < particles.length; i++) {
    particles[i].display();
    particles[i].move();
  }
}
