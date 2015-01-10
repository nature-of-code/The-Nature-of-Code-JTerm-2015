ArrayList<Particle> particles;

function setup() {
  createCanvas(600,400);
  particles = new ArrayList<Particle>();
}

function draw() {
  background(0);
  for (Particle p : particles) {
    p.display();
    p.update();
  }
}

function mousePressed() {
  particles.add(new Particle(mouseX,mouseY)); 
}
