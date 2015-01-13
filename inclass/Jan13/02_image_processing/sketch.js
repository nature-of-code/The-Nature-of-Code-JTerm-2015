var img;
var slider;

function preload() {
  img = loadImage("panda.jpg");  
}

function setup() {
  devicePixelScaling(false);
  createCanvas(480, 320);
  slider = createSlider(0, 500, 100);
}

function draw() {
  //image(img,0,0);
  loadPixels();
  img.loadPixels();
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var loc = (x + y * width) * 4;
      // Getting a color
      var r = img.pixels[loc];
      var g = img.pixels[loc+1];
      var b = img.pixels[loc+2];
      
      // Your image processing algorithm
      r = r * slider.value()/100;
      g = g * slider.value()/100;
      b = b * slider.value()/100;
      
      // Setting a color
      pixels[loc] = r;
      pixels[loc+1] = g;
      pixels[loc+2] = b;
      pixels[loc+3] = 255; 
    }
  }
  updatePixels();
}





