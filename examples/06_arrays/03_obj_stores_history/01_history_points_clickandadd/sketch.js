var particles = [];

function setup() {
  createCanvas(600,400);
}

function draw() {
  background(0);
  for (var i = 0; i < particles.length; i++) {
    particles[i].display();
    particles[i].move();
  }
}

function mousePressed() {
  particles.push(new Particle(mouseX,mouseY)); 
}
