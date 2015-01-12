//var particle;
var particles = new Array(500);

function setup() {
  createCanvas(360,300);
  for (var i = 0; i < particles.length; i++) {
    particles[i] = new Particle();
  }
}

function draw() {
  background(0);
  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].display();
  }
}






