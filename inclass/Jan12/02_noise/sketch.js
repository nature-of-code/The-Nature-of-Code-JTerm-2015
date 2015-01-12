var t = 0;

function setup() {
  createCanvas(360,300);
}

function draw() {
  background(0);

  fill(255);
  
  // A random x location
  // var x = random(0, width);

  // Using noise
  // Must specify "time" argument
  // Always get a value between 0 and 1 back
  var x = noise(t)*width

  ellipse(x, 150, 20, 20);

  t = t + 0.02;

}






