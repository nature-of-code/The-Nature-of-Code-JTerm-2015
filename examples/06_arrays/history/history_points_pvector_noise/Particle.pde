class Particle {
  PVector pos;
  
  var xoff = random(1000);
  var yoff = random(1000);

  ArrayList<PVector> history;

  Particle(var x, var y) {
    pos = new PVector(x, y);
    history = new ArrayList<PVector>();
  }

  function display() {
    ellipse(pos.x, pos.y, 8, 8);
    noFill();
    stroke(255);
    beginShape();
    for (PVector p : history) {
      vertex(p.x,p.y); 
      p.x += random(-1,1);
      p.y += random(-1,1);
    }
    endShape();
  }

  function move() {
    history.add(new PVector(pos.x, pos.y));
    pos.x = noise(xoff)*width;
    pos.y = noise(yoff)*width;
    
    if (history.size() > 50) {
      history.remove(0); 
    }
    
    xoff += 0.01;
    yoff += 0.01;
  }
}
