
function Bouncer() {
  this.x = width/2;
  this.y = random(height);
  this.r = 16;
  this.display = function() {
    fill(255);
    ellipse(this.x,this.y,this.r*2,this.r*2);
  }
}

// bouncer1 = {
//   x: width/2,
//   y: 100,
//   display: function() {
//     fill(255);
//     ellipse(this.x,this.y,32,32);
//   }
// }