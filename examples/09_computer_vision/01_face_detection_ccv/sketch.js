
// A video element
var video;

// A canvas element
var canvas;

function setup() {

  // You only need this on retina computers
  devicePixelScaling(false);
  
  // setup canvas
  canvas = createCanvas(320, 240);

  // setup camera capture
  video = createCapture(VIDEO);
  video.size(width, height);
  // Not showing the video in its HTML element
  video.hide();
}

function draw() {
  background(0);
  // Draw the video
  image(video,0,0);

  // Ask for an array of face objects
  var faces = ccv.detect_objects({
    canvas: canvas.elt,
    cascade: cascade,
    interval: 4,
    min_neighbors: 1
  });
   
  // Each face has:
  // x,y, width, height
  // also "confidence" -- how sure is the program that it is a face
  for (var i = 0; i < faces.length; i++) {
    noFill();
    stroke(0);
    strokeWeight(4);
    rect(faces[i].x,faces[i].y,faces[i].width,faces[i].height);
  }

}