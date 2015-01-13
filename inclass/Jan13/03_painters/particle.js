
function Particle() {
  this.x = 0;
  this.y = 0;
  this.t1 = random(10000);
  this.t2 = random(10000);

  this.update = function() {
    this.x = noise(this.t1)*width;
    this.y = noise(this.t2)*height;
    this.t1 += 0.02;
    this.t2 += 0.02;
  }

  this.display = function() {
    //stroke(0);
    noStroke();
    
    //var colors = img.get(this.x,this.y);
    //fill(colors[0], colors[1], colors[2],255);
    
    var loc = (floor(this.x) + floor(this.y)*width)*4;
    var r = img.pixels[loc];
    var g = img.pixels[loc+1];
    var b = img.pixels[loc+2];
    fill(r,g,b,10);
    ellipse(this.x,this.y,16,16);
  }
}