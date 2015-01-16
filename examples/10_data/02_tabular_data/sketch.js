
function setup() {
  createCanvas(300, 200);
  loadTable('data.csv','header',loaded);
}

function loaded(table) {
  background(0);
  for (var i = 0; i < table.rows.length; i++) {
    var name = table.rows[i].get('name');
    var num = table.rows[i].get('num');

    fill(255,100);
    stroke(255);
    ellipse(50+i*50, 75, num, num);

    textAlign(CENTER);
    noStroke();
    fill(200);
    text(name, 50+ i*50, 120);
  }
}
