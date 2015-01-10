class Particle {
  PPoint pos;

  ArrayList<PPoint> history;

  Particle(var x, var y) {
    pos = new PPoint(x, y);
    history = new ArrayList<PPoint>();
  }

  function display() {
    ellipse(pos.x, pos.y, 8, 8);
    noFill();
    stroke(255);
    beginShape();
    for (PPoint p : history) {
      vertex(p.x,p.y); 
      p.x += random(-1,1);
      p.y += random(-1,1);
    }
    endShape();
  }

  function move() {
    history.add(new PPoint(pos.x, pos.y));
    pos.x += random(-10, 10);
    pos.y += random(-10, 10);
    
    if (history.size() > 50) {
      history.remove(0); 
    }
  }
}
