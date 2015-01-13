
var video;

function setup() {
  createCanvas(480,320);
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  background(0);
  image(video,0,0,width,height);

}






