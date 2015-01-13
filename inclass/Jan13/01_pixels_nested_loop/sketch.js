function setup() {
  createCanvas(480, 320);
}

function draw() {
  loadPixels();
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      // var d = dist(x, y, mouseX, mouseY);
      // var loc = (x + y * width) * 4;
      // pixels[loc] = d*2;
      // pixels[loc+1] = 0;
      // pixels[loc+2] = 0;
      // pixels[loc+3] = 255; 
      var loc = (x + y * width) * 4;
      pixels[loc] = x;
      pixels[loc+1] = y;
      pixels[loc+2] = 0;
      pixels[loc+3] = 255; 
    }
  }
  updatePixels();
}





