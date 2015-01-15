
var data;
function preload() {
  data = loadJSON("http://api.openweathermap.org/data/2.5/forecast?q=London,uk&mode=JSON");
}

function setup() {
  createCanvas(480, 320);
  console.log(data.city.name);
  console.log(data.main.humidity);

}

function draw() {

}





