/*
Demonstrates definition and use of a function with parameters and arguments.

Created by Dawn D. Hayes March 2017. Modified by Grace Zuniga 
*/

function setup() {
  createCanvas(600, 400);  //creates canvas sized 600 by 400
}

function draw() {
  background(0); // background color is black
  moon(445, 200, 150); //the moon shape is drawn at the arguments given.
  
  star(370, 25); // star at this location
  star(50, 175); // star at this location
  star(115, 35); // star at this location
  star(25,44); // star at this location
  star(100, 17); // star at this location
  star(215, 235); // star at this location
  star(418, 293); // star at this location
  star(525, 370); // star at this location
  star(175, 350); // star at this location
  star(235, 115); // star at this location
  star(444, 325); // star at this location
  star(317, 200); // star at this location
  star(535, 315); // star at this location
  star(293, 218); // star at this location
  
  flicker(100, 100); // dot flickering at this location
  flicker(200,200); // dot flickering at this location
  flicker(520,400); // dot flickering at this location
  flicker(400,300); // dot flickering at this location
  flicker(550,100); // dot flickering at this location
}

// a function is defined with the keyword function.
// any name can be used as long as it is not a reserved/ system word/
// it takes values or variables called parameters
// functions should be defined outside of the setup() and draw() loops.
function moon (xloc, yloc, diam) { // value needed for moon function
  noStroke(); // no outline 
  fill(255, 255, 153); //fill this color
  ellipse(xloc, yloc, diam); // parameters are passed into ellipse.
}

function star(xloc, yloc) {// values needed for star
  fill(255); // fill white 
  ellipse(xloc, yloc, 5); // ellipses created with these parameters
}
function flicker(xloc,yloc) { // values needed for flicker
  fill(random(255), random(255), random(255)); // fill random grayscale for flicker effect
  ellipse(xloc,yloc,5); // creates ellipses with these parameters
}

  