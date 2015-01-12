var t1 = 0;
var t2 = 10000;

function setup() {
  createCanvas(360,300);
}

function draw() {
  background(0);

  fill(255);
  
  //var x = random(0, width);
  var x = noise(t1)*width
  var y = noise(t2)*height;
  ellipse(x, y, 20, 20);

  t1 = t1 + 0.02;
  t2 = t2 + 0.02;

}






