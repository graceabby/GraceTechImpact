/*
Defining functions. Points are drawn across x axis of the canvas. Functions to move and display are 
created and called. Modified by Grace Zuniga
*/

// create an object, blip using object literal notation syntax.
// this could be simplified by using a constructor function to make a template that will 
// create as many blip objects desired.

var blip= { // creates var blip
  x: 0, // x coordinatwe 0
  y: 100, // y coordinate 100
  xspeed: 4, // xspeed is 4
}

var blip2 = { // creates var blip2
  x: 0, // x coordinate is 0
  y: 200, // y coordinateis 200
  xspeed:4, // xspeed is 4
}

var blip3 = { // creates var blip3
  x: 600,  // x cordinate is 600
  y: 200, // the y position is the same as blip3 so that they intersect.
  xspeed: 4, // xspeed is 4
}

var blip4 = { // creates var blip4
  x: 600, // x coordinate is 600
  y: 300, // y coordinate is 300
  xspeed: 4 // xspeed is 4
}

var blip5 ={ // creates var blip5
  x: 300, // x coordinate is 400
  y: 0, // y coordinate is 0
  yspeed: 4 // xspeed is 4
}

var blip6 ={ // creates var blip6
  x: 300, // x coordinate is 300
  y: 600, // y coordinate is 600
  yspeed: 4 // yspeed is 4
}




function setup() {
  createCanvas(600, 400); // canvas sized 600 by 400
  background(0); // background color is black
}

function draw() {
  move(); // call the defined move() function.
  display(); // call the defined display() function.
}

// define a function using the keyword function.
// move the function()
function move() {
  blip.x = blip.x + blip.xspeed; // function to show motion for blip
  blip2.x = blip2.x + blip2.xspeed; // function to show motion for blip2 
  blip3.x = blip3.x - blip3.xspeed; // function to show motion for blip3
  blip4.x = blip4.x - blip4.xspeed; // function to show motion for blip4
  blip5.y = blip5.y + blip5.yspeed; // function to show motion for blip5
  blip6.y = blip6.y - blip6.yspeed; // function to show motion for blip6
}
//display function()
function display() {
  strokeWeight(2); // outline thickness is 2
  stroke(255,0,255); // outline color 
  // an array and for loop could be ued so point does not need to be called repeatedly.
  point(blip.x, blip.y); // staring point of blip
  point(blip2.x, blip2.y); // starting point of blip2
  point(blip3.x, blip3.y); // starting point of blip3
  point(blip4.x, blip4.y); // starting point of blip4
  point(blip5.x, blip5.y); // starting point of blip5
  point(blip6.x, blip6.y); // starting point of blip6
}