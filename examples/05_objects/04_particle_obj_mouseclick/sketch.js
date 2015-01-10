var p1;
var p2;

function setup() {
  createCanvas(400, 300);
  createP("Click on the particles");
  p1 = new Particle(100,200);
  p2 = new Particle(300,100);
}

function draw() {
  background(0);
   
  p1.display();
  p2.display();

}

function mousePressed() {
  if (p1.over(mouseX,mouseY)) {
    p1.change();
  }
  if (p2.over(mouseX,mouseY)) {
    p2.change();
  }
}
