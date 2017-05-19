/* 
Example with multile shapes across the canvas/window using object literal notation.
Created by Dawn C. Hayes March 2017. (Modified by Grace Zuniga May 2017)
*/


var circle = { // creates variable circle containing the following values
  x: 200, // x is valued at 200
  y: 200, // y is valued at 200
  diam: 50, // diam is valued at 50
  r: 255, // r is valued at 255
  g: 123, // g is valued at 123
  b: 25 // b is valued at 25
}


var rectangle = { // creates variable rectangle containing the following values
  x: 100, // x valued at 100
  y: 100, // y valued at 100
  diam: 75, // diam valued at 75
  r: 15, // r valued at 15
  g: 33,// g valued at 33
  b: 225 // b valued at 255
}
var circ = { // creates variable circ containg the follwoing values
  x: 350, // x valued at 350
  y: 100,// y valued at 100
  diam:30, // diam valued at 30 
  r: 255, // r valued at 255
  g: 50, // g valued at 50 
  b: 70 // b valued at 70
}


function setup() { // functions to be exectuted in set up (once)
  createCanvas(400, 400); // creates canvas sized 400 by 400
}


function draw() { // draws following functions
  background(34, 123, 218); // background is set to this color 
  noStroke(); // no outline
  fill(circle.r, circle.g, circle.b); // fills shape according to variable values
  ellipse(circle.x, circle.y, circle.diam, circle.diam); // creates shape according to variable values
  fill(rectangle.r, rectangle.g, rectangle.b); // fills shape according to variable values
  rect(rectangle.x, rectangle.y, rectangle.diam, rectangle.diam); // creates shape according to variable values
  fill(circ.r, circ.g, circ.b); // fills shape according to variable values
  ellipse(circ.x, circ.y, circ.diam, circ.diam); // creates shape according to variable values
}