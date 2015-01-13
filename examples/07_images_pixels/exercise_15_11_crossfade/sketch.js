// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Exercise 15-11: Using the framework established by our image processing examples, create 
// two images as input and generates one output image. In other words, each 
// pixel displayed should be a function of the color values from two pixels, one from one image 
// and one from another. For example, can you write the code to blend two images together 
// (without using tint())? 

// Two source images
var source0;      // Source image 1
var source1;      // Source image 2

// A percentage (10% one image, 90% the other, etc.  starts at 0%);
var p = 0;

function preload() {
  source0 = loadImage("data/panda0.jpg");
  source1 = loadImage("data/panda1.jpg");
}

function setup() {
  devicePixelScaling(false);
  createCanvas(480, 320);
}

function draw() {
  // Percentage goes from 0 to 1 then back to 0
  p += 0.01;
  if (p > 1.0) p = 0;

  loadPixels();
  // We are going to look at both image's pixels
  source0.loadPixels();
  source1.loadPixels();

  for (var x = 0; x < source0.width; x++ ) {
    for (var y = 0; y < source0.height; y++ ) {
      var loc = (x + y*source0.width)*4;

      // Two colors
      var r0 = source0.pixels[loc   ]; 
      var g0 = source0.pixels[loc + 1];
      var b0 = source0.pixels[loc + 2];
      var r1 = source1.pixels[loc   ]; 
      var g1 = source1.pixels[loc + 1];
      var b1 = source1.pixels[loc + 2];

      // Combine each image's color
      var r = p*r0+(1.0-p)*r1;
      var g = p*g0+(1.0-p)*g1;
      var b = p*b0+(1.0-p)*b1;

      // Set the new color
      pixels[loc    ] = r;
      pixels[loc + 1] = g;
      pixels[loc + 2] = b;
      pixels[loc + 3] = 255; // Always have to set alpha
    }
  }

  updatePixels();
}