/*
Example with shapes across the canvas/window using object literal notation.
Created by Dawn C. Hayes March 2017 (Modified by Grace Zuniga May 2017)
*/

// the code below creates a circle using object literal notation. Everything inside the brackets is local in scope
// and is accessed with dot syntax.


var circle = { // creates variable circle with following values
    x: 200, // x is valued at 200
    y: 200, // y is valued at 200
    diam: 50, // diameter is valued at 50
    r: 255, // r is valued at 255
    g: 123, // g is valued at 123
    b: 25 // b is valued at 25
}

var rectangle = { //creates variable rectangle witn following values
  x: 100, // x is valued at 100
  y: 100, // y is valued at 100
  diam: 55, // diam is valued at 55
  r: 34, // r is valued at 34
  g: 65, // g is valued at 65
  b: 100 // b is valued at 100
}

/*
the same circle could be drawn using variables, but objects enable modularity and reusability in code.
code can also be witten in fewer lines. for instance: 

var circlex = 200;
var circley = 200;
var diam = 50;
var circler = 255;
var circleg = 123;
var circleb = 25;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background (34, 123,218);
  nostroke();
  fill(circler, circleg, circleb);
  ellipse(circlex, circley, diam, diam);
}

//compare this to code organized with an object.
*/

function setup(){
  createCanvas(400, 400); // creates canvas sized 400 by 400
}


function draw() {
  background(34, 123, 218); // sets background this color 
  noStroke(); // no outline for shape
  fill(circle.r, circle.g, circle.b); // fill shape according to variable values
  ellipse(circle.x, circle.y, circle.diam, circle.diam); // creates shape according to variable values
  
  stroke(255); // outline color white
  fill(rectangle.r, rectangle.g, rectangle.b); // fills shape according to variable color
  rect(rectangle.x, rectangle.y, rectangle.diam, rectangle.diam); //creates shape according to variable values
}