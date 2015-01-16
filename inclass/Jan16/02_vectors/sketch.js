var bouncer1;

function setup() {
  createCanvas(400,300);
  bouncer1 = new Bouncer(50);
}

function draw() {
  background(0);
  
  var gravity = createVector(0,0.3);
  bouncer1.applyForce(gravity);
  
  if (mouseIsPressed) {
    var wind = createVector(0.2, 0);
    bouncer1.applyForce(wind);
  }

  bouncer1.display();
  bouncer1.move();
}





