var particles = [];


function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 15; i++) {
    particles.push(new Particle(random(width), random(height), random(20, 40)));
  }
}

function draw() {
  background(0);

  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    for (var j = 0; j < particles.length; j++) {
       if (particles[i] != particles[j]) {
         if (particles[i].overlaps(particles[j])) {
           particles[i].change(); 
         }
       }
    }
    particles[i].display();
  }
}
