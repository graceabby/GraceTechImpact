// Code created by Grace Zuniga May 2017

var circle = { // establishing variable circle which will have these values
  x: 100, // x is valued at 100
  y:100, // y is valued at 100
  xspeed: 2 // xspeed variable is valued at 2
}

function setup() { // set parameters and code for the set up (once)
  createCanvas(600,600); // creates canvas sized 600 by 600
  
}

function draw() { // executes code in the draw function (repeated)
  background(0); // background color is black
  diagonal(); // calling diagonal function
  show(); //calling show function
}
  function diagonal() { // parameters needed for diagonal function
    circle.x = circle.x + circle.xspeed; // variable circle.x will be valued at circle.x + circle.xspeed
    circle.y = circle.y + circle.xspeed; // variable circle.y will be valued at circle.y + circle.yspeed
  }
  function show() { // parameters needed for show fucntion
  stroke(255); // outline white
  fill(255); // fill color white
  ellipse(circle.x, circle.y, 50, 50); // create a circle according to variable values
  }
  