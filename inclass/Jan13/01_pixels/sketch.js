function setup() {
  createCanvas(480, 320);
}

function draw() {
  loadPixels();
  
  for (var i = 0; i < pixels.length; i+=4) {
    if (i > 60000) {
      pixels[i] = 255;
      pixels[i+1] = 0;
      pixels[i+2] = 0;
      pixels[i+3] = 255;
    } else {
      pixels[i] = 0;
      pixels[i+1] = 255;
      pixels[i+2] = 0;
      pixels[i+3] = 255;
    }
  }

  updatePixels();




}





