class Particle {
  PVector pos;
  
  var xoff = random(1000);
  var yoff = random(1000);

  ArrayList<PVector> history;

  Particle(var x, var y) {
    pos = new PVector();
    history = new ArrayList<PVector>();
  }

  function display() {
    ellipse(pos.x, pos.y, 8, 8);
    noFill();
    stroke(255);
    beginShape();
    for (PVector p : history) {
      vertex(p.x,p.y); 
    }
    endShape();
  }

  function update() {
    pos.x = noise(xoff)*width;
    pos.y = noise(yoff)*width;
    history.add(new PVector(pos.x, pos.y));
    
    if (history.size() > 50) {
      history.remove(0); 
    }
    
    xoff += 0.01;
    yoff += 0.01;
  }
}
