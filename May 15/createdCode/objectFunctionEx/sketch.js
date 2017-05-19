/* 
Code defines one object with at least one function
Created by Grace ZUniga May 2017
*/

var flick = { // creates var flick and and assigns following values
  x: 200, // x is valued at 200
  y: 200, // y is valued at 200
  size: 100 // size is valued at 100
}

function setup() {
  createCanvas(400, 400); // canvas sized at 400 by 400
 background(0); // background is black
}

function draw() {
 flicker(); // calling the function flicker
}
   
 function flicker() { // execute the following for function flicker
    stroke(255); // outline white
    fill(random(255), random(255), random(255)); // fill random flickering colors
    ellipse(flick.x, flick.y, flick.size); // create shape according to variable colors
  }
  