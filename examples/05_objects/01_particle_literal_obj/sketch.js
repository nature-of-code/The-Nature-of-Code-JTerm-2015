var p1;
var p2;

function setup() {
  createCanvas(400, 300);
  p1 = {
    x: 200,
    y: 0,
    xspeed: random(-1,1),
    yspeed: 0,
    display: function() {
      fill(255);
      ellipse(this.x, this.y, 28, 28);
    },
    //function functions
    move: function() {
      this.x = this.x + this.xspeed;
      this.y = this.y + this.yspeed;
      this.yspeed = this.yspeed + 0.1;
      
      if (this.y > height) {
        this.y = -20;
        this.yspeed = 0;
        this.xspeed = random(-1,1);
      } 
    }
  };
}


function draw() {
  background(0);
  p1.display();
  p1.move();
}
