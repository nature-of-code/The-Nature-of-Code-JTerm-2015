
function setup() {
  createCanvas(300, 200);
}

function draw() {

  if (mouseX > 150) {
    background(255,0,0);
  } else if (mouseX > 50) {
    background(0,255,0);
  } else {
    background(0,0,255);
  }

  stroke(255);
  line(50,0,50,height);
  line(150,0,150,height);
}


