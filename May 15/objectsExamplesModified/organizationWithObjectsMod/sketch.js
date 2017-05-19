/*
Example with multiple shapes across the canvas/ window using object literal notation place in tabs for organization.
Code that references the circle and rectangle are in their own tabs, linked in the HTML document: 
<script src="circle.js" type="text/javascript"></script>
<script src="rectangle.js" type="text/javascript"></script>

Created by Dawn C. Hayes March 2017 (Modified by Grace Zuniga May 2017)
*/

function setup() { 
  createCanvas(400, 400);  //creates canvas sized at 400 by 400 
}

function draw() {
  background(34, 123, 218); // sets background to this color
  noStroke(); // no outline 
  fill(circle.r, circle.g, circle.b); // fills according to variable values
  ellipse(circle.x, circle.y, circle.diam, circle.diam); // creates shape according to variable values
  fill(rectangle.r, rectangle.g, rectangle.b); // fills according to variable values
  rect(rectangle.x, rectangle.y, rectangle.diam, rectangle.diam); // creates shape according to variable values
  fill(random(255)); //fills grayscale randomly
  ellipse(star.x, star.y, star.diam, star.diam); // creates shape according to variable values
}