var bouncer1;

function setup() {
  createCanvas(400,300);
  bouncer1 = new Bouncer(50);
}

function draw() {
  background(0);
  bouncer1.display();
  bouncer1.move();
}





