/* This code will show that order matters.
Code by Grace Zuniga */

// Because the ellipse function is set up in the set up and read through only once and first, it gets executed 
// before the background color is set (black), making the circle shape not visible on the screen. 
// if we moved the ellipse in the draw or background in setup we would be able to see both the rectangle and circle


function setup() {
  createCanvas(400, 400); // creates canvas sized 400 by 400
  ellipse(100, 100, 25, 25); // creates shapes x 100, y 100 sized 25 by 25
}

function draw() {
   background(0); // background color is black
  stroke(255,0,0); // outline red
  rect(200, 200, 25, 25); // creates shape x 200, y 200, 25 by 25
}