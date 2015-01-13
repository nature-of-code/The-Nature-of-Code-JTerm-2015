var img;

var x = 300;
var y = 100;

function preload() {
  img = loadImage("panda.jpg");  
}

function setup() {
  createCanvas(480, 320);
}

function draw() {
  background(0,100,100);
  tint(255,0,0);
  image(img, 0 ,0);//, mouseX, mouseY);

  //imageMode(CENTER);
  //image(img, x, y,16,16);
  //y = y -1;
}





