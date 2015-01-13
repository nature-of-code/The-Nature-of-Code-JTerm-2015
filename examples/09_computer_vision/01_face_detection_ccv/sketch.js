var video;
var canvas;

function setup() {

  // setup canvas
  devicePixelScaling(false);
  canvas = createCanvas(320, 240);

  // setup camera capture
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
}

function draw() {
  background(0);
  image(video,0,0);

  var faces = ccv.detect_objects({
    canvas: canvas.elt,
    cascade: cascade,
    interval: 4,
    min_neighbors: 1
  });

  for (var i = 0; i < faces.length; i++) {
    noFill();
    stroke(0);
    strokeWeight(4);
    rect(faces[i].x,faces[i].y,faces[i].width,faces[i].height);
    test = faces[i];
  }

}