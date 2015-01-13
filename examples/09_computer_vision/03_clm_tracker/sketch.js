var ctracker;
var video;

function setup() {

  // setup canvas
  devicePixelScaling(false);
  var cnv = createCanvas(320, 240);
  cnv.position(0, 0);

  // setup camera capture
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();
  

  // setup tracker
  ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(video.elt);

  noStroke();
}

function draw() {
  background(0);
  image(video,0,0);

  // get array of face marker positions [x, y] format
  var positions = ctracker.getCurrentPosition();

  for (var i=0; i<positions.length; i++) {
    fill(0);
    ellipse(positions[i][0], positions[i][1], 8, 8);
  }
}