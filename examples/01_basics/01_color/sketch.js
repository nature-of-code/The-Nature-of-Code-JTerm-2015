function setup() {
  // put setup code here
  createCanvas(600, 400);
}

function draw() {  

  // One value is grayscale
  // 0 - 255 (black to white)
  background(50);
  
  // stroke sets the outline of a shape
  stroke(255);
  line(100, 50, 500, 50);
  
  // fill sets the interior color of a shape
  fill(127);
  rect(50, 100, 75, 75);

  
  // Three arguments: red, green, and blue
  fill(200, 100, 50);
  ellipse(300, 200, 80, 80);

  // Four arguments: red, green, blue, and alpha
  // alpha is transparency 0 is transparent and 255 opaque
  fill(50, 100, 200, 100);
  rect(300, 125, 100, 100);

  // You can set both a stroke and fill for a shape
  // strokeWeight() also  
}