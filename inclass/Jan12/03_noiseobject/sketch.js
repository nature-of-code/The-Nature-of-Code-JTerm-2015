var particle;

function setup() {
  createCanvas(360,300);
  particle = new Particle();
}

function draw() {
  background(0);
  particle.update();
  particle.display();
}






