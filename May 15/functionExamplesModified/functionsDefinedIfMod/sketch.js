/* Define functions. 
Created by Grace Zuniga May 2017
*/

var string = { //creates variable string
  x: 200, // x is valued at 200
  y: 450, // y is valued at 450
  xspeed: 3.5, // xspeed is valued at 3.5
  yspeed: -2.5 // y speed is valued at -2.5
}

function setup() { 
  createCanvas(600, 600); // canvas sized 600 by 600
  background(255); // color is set to white
}

function draw() {
  across(); // calling across function
}

function across() { // setting up following parameters for across function
  if (string.x > width || string.x <0) { // if loop sting.x is greater than or less than 0 then read next line
    string.xspeed = string.xspeed * -1; // variable string.xspeed will be assigned value of xstring.xspeed *-1 (motion)
    background(255, random(255), 255); // fill background this color
  }

  
  string.x = string.x + string.xspeed; // code for motion, 

  strokeWeight(4); // object outline is set to 4
  stroke(random(255)); // object outline color is set to grayscale random
  point(string.x, string.y); // create shape at variable values
}