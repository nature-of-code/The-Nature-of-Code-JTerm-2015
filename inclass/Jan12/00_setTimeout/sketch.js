

function setup() {
  createCanvas(200,200);
  
  //
  //setInterval(doSomething,1000);

  setTimeout(doSomething,1000);

  setTimeout(function() { 
    background(random(255));
  }, 1000);

}


function doSomething() {
  background(random(255));
  //setTimeout(doSomething,1000);

}





