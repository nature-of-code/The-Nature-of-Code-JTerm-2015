
function setup() {
  createCanvas(360,300);
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  background(0);

  // var x = 0;
  // while (x < width) {
  //   fill(x,100,75);
  //   rect(x,0,20,height);
  //   x = x + 20;
  // }

  for (var x = 0; x < width; x = x + 20) {
    fill(x,100,75);
    rect(x,0,20,height);
  }

  // noStroke();
  // fill(300,100,75);
  // rect(0,0,20,height);

  // fill(280,100,75);
  // rect(20,0,20,height);

  // fill(260,100,75);
  // rect(40,0,20,height);

}






