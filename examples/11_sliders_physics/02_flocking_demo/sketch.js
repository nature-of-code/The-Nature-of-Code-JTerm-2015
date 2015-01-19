// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Demonstration of Craig Reynolds' "Flocking" behavior
// See: http://www.red3d.com/cwr/
// Rules: Cohesion, Separation, Alignment

// Click mouse to add boids into the system

var flock;

var text;

var sepSlider, aliSlider, cohSlider;
var sepInfo, aliInfo, cohInfo;

function setup() {
  text = createP("Click the mouse to generate new boids.");

  var canvas = createCanvas(640,360);
  canvas.parent("canvas");
  canvas.mousePressed(newBoids);

  flock = new Flock();
  // Add an initial set of boids into the system
  for (var i = 0; i < 60; i++) {
    var b = new Boid(width/2,height/2);
    flock.addBoid(b);
  }

  sepSlider = createSlider(0,4,1);
  sepSlider.elt.step = 0.01;
  aliSlider = createSlider(0,4,1);
  aliSlider.elt.step = 0.01;  
  cohSlider = createSlider(0,4,1);
  cohSlider.elt.step = 0.01;
  sepSlider.parent("separation");
  aliSlider.parent("alignment");
  cohSlider.parent("cohesion");

  sepInfo = createDiv('test');
  aliInfo = createDiv('test');
  cohInfo = createDiv('test');
  sepInfo.parent("separation");
  aliInfo.parent("alignment");
  cohInfo.parent("cohesion");

}

function draw() {
  background(51);
  flock.run();

  sepInfo.html("Separation: " + sepSlider.value());
  cohInfo.html("Cohesion: " + cohSlider.value());
  aliInfo.html("Alignment: " + aliSlider.value());
}

// Add a new boid into the System
function newBoids() {
  flock.addBoid(new Boid(mouseX,mouseY));
}

