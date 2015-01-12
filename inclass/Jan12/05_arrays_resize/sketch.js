var particles = [];

function setup() {
  createCanvas(360,300);
}

function draw() {
  background(0);
  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].display();
  }
}

function mousePressed() {
  particles.push(new Particle());
}

function keyPressed() {
  particles.splice(0, 1);
}

