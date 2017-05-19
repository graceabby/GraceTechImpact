/* 
Code by Dawn Hayes, modified by Grace Zuniga May 2017
*/

var on = false; // variable is stated as false

function setup() {
  createCanvas(600, 400); // creates canvas sized 600 by 400
}

function draw() {
  if(on) {
    background(50,150,200); // background is set to color determined by values
    }else{ // anything else next line
      background(255); // background is set to white
  }
  
  stroke(0); // outline is white
  strokeWeight(2); // outline thickness is set to 2
  noFill(); // is not color filled
  
  if(mouseX > 150 && mouseX < 250 && mouseY > 150 && mouseY < 250) { // if mouse hovers over this criteria then execute next line
    fill(0, 0, 255); // fill shape blue 
  }
  rectMode(CENTER); // uses x and y to determine shapes center
  rect(200, 200, 100, 50); // creates rectangle at x 200, y 200, sized 100 by 50
}

function mousePressed() { // mouse is pressed function 
  if (mouseX > 150 && mouseX < 250 && mouseY > 150 && mouseY < 250) { // if mouse is mouse is pressed at this criteria then execute next line
    on = !on; // not on 
  }
}