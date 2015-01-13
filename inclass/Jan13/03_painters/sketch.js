var particles = new Array(50);
var img;

function preload() {
  img = loadImage("panda.jpg");  
}

function setup() {
  createCanvas(480,320);
  for (var i = 0; i < particles.length; i++) {
    particles[i] = new Particle();
  }
  background(0);
}

function draw() {
  //background(0);
  img.loadPixels();
  //image(img,0,0);
  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].display();
  }
}






