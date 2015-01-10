var p1;
var p2;

function setup() {
  createCanvas(400, 300);
  p1 = new Particle(100);
  p2 = new Particle(300);
}

function draw() {
  background(0);
   
  p1.display();
  p1.move();
  p2.display();
  p2.move();

}
