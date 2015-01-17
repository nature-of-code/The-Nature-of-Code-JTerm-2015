
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com
var movers = [];
var attractor;

// Three variables for sliders
var colorSlider;
var attractionSlider;
var sizeSlider;

function setup() {
  var canvas = createCanvas(640, 360);  
  // This parent stuff is attaching the canvas to
  // layout elements I've placed in index.html
  canvas.parent("canvas");

  for (var i = 0; i < 10; i++) {
    movers[i] = new Mover(random(0.1, 2), random(width), random(height));
  }
  attractor = new Attractor();
  
  // Make three slideres with ranges
  colorSlider = createSlider(0, 255, 50);
  attractionSlider = createSlider(0, 10, 1);
  // This is an extra line of code that makes the range of this slider
  // more fine than integer steps 
  attractionSlider.elt.step = 0.01;
  
  // Another slider
  sizeSlider = createSlider(1, 64, 16);

  // This is for layout (see: index.html)
  colorSlider.parent("color");
  attractionSlider.parent("strength");
  sizeSlider.parent("size");

}

function draw() {
  // Using the slider value!
  background(colorSlider.value());

  
  // Using the slider value!
  attractor.strength = attractionSlider.value();
  attractor.display();

  for (var i = 0; i < movers.length; i++) {
    var force = attractor.calculateAttraction(movers[i]);
    movers[i].applyForce(force);

    movers[i].update();
    movers[i].display();
  }
}

function mouseMoved() {
  attractor.handleHover(mouseX, mouseY);
}

function mousePressed() {
  attractor.handlePress(mouseX, mouseY);
}

function mouseDragged() {
  attractor.handleHover(mouseX, mouseY);
  attractor.handleDrag(mouseX, mouseY);
}

function mouseReleased() {
  attractor.stopDragging();
}