var video;
var canvas;
var htracker;
function setup() {

  // setup canvas
  devicePixelScaling(false);
  canvas = createCanvas(320, 240);
  background(100);

  // setup camera capture
  video = createElement('video');
  video.size(width, height);
  var extra = getElement('extra');

  htracker = new headtrackr.Tracker({
    ui: true,
    debug: canvas.elt
  });
  htracker.init(video.elt, extra.elt);
  htracker.start();
}

function draw() {
  //background(0);
  //image(video,0,0);
}