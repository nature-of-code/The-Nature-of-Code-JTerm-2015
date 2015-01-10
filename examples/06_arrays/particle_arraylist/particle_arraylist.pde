//Particle[] particles = new Particle[200];

ArrayList<Particle> particles = new ArrayList<Particle>();

function setup() {
  createCanvas(400, 300);
}

function mousePressed() {
  particles.add(new Particle(mouseX, mouseY));
}
function draw() {
  background(0);
  for (var i = 0; i < particles.size(); i++) {
    Particle p = particles.get(i);
    p.move();
    p.display();
  }
  
  if (particles.size() > 5) {
    particles.remove(0);
  }
  
}
