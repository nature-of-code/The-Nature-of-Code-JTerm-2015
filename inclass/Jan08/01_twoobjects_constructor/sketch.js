var bouncer1;
var bouncer2;

function setup() {
  createCanvas(400,300);
  bouncer1 = new Bouncer(50);
  bouncer2 = new Bouncer(25);
}

function draw() {
  background(0);
  bouncer1.display();
  bouncer2.display();
}





