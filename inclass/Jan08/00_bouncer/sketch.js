
// var x;
// var y;
// var r;
// var speed = 0;
var bouncer;
var gravity = 0.3;

function setup() {
  createCanvas(400,300);
  bouncer = {
    x: width/2,
    y: 0,
    r: 32,
    speed: 0,
    display: function() {
      fill(255);
      ellipse(this.x,this.y,this.r*2,this.r*2);
    },
    move: function() {
      this.y = this.y + this.speed;
      this.speed = this.speed + gravity;
    },
    bounce: function() {
      if (this.y > height) {
        this.y = height;
        this.speed = this.speed * -0.9;
      }
    }
  }
}

function draw() {
  background(0);
  bouncer.display();
  bouncer.move();
  bouncer.bounce();
}







