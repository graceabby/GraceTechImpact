/*
nested loop that draws rectangles to the canvas 
Code by Professor D, modified by Grace Zuniga May 12 2017
*/


function setup() {
  createCanvas(600, 400); // creates a canvas sized 600, by 400
  background(0, 64,135); // sets background this color
}

function draw() {
  strokeWeight(4); // assigns the weight of shape's outline
  stroke(255); // assigns outline color white
  
  for(var i = 30; i<= width; i+=60) { // assigns 30 to variable 1, and when var i is less than or equal to the width, add 60
    for (var j = 30; j<= height; j+= 60) { // assigns 30 to variable j and when j is less than or equal to the height, add 60

      stroke(255); // outline color white
      fill(random(255), random(255), mouseY); // fills colors random shades and reacts with mouse turning blue
      ellipse(i, j, 35,35); // creates shape according to variable conditions
    }
  }
}