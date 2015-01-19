// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Seeking "vehicle" follows the mouse position

// Implements Craig Reynold's autonomous steering behaviors
// One vehicle "seeks"
// See: http://www.red3d.com/cwr/

var v;
var slider;
var txt;

var mouse;

function setup() {
  createCanvas(640,360);
  slider = createSlider(0, 1, 0.76);
  txt = createP("value");
  
  slider.elt.step = 0.01;
  slider.elt.value = 0.76;


  v = new Vehicle(10,10);
  mouse = createVector(width/2, height/2);
}

function draw() {
  background(51);

  txt.html(slider.value());

  if (mouseIsPressed && mouseY < height && mouseX < width) {
    mouse = createVector(mouseX, mouseY);
  }


  // Draw an ellipse at the mouse location
  fill(127);
  stroke(200);
  strokeWeight(2);
  ellipse(mouse.x, mouse.y, 48, 48);

  // Call the appropriate steering behaviors for our agents
  v.seek(mouse);
  v.update();
  v.display();

};
