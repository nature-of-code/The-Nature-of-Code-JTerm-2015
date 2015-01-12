function setup() {
  createCanvas(200,200);
  
  // This happens ever 1000 milliseconds
  //setInterval(doSomething,1000);

  // This happens 1000 milliseconds later
  setTimeout(doSomething,1000);
  
  // This shows how to write the above with an anonymous function
  // setTimeout(function() { 
  //  background(random(255));
  // }, 1000);
}

function doSomething() {
  background(random(255));
}





