/*
Basic shapes structure
Created by Grace Zuniga May 9 2017
*/

// Let's build a house!

function setup() {
  createCanvas(750,550); // this function establishes a canvas 750 x 550
}

function draw() {
  
  strokeWeight(4); // the strokeWeight() function creates a thicker line
  quad(300,200,300,450,500,450,500,200); // the quad() function creates a 4 sided shape. In this example it produces a rectangle, x,y coordinates go counter clockwise
  
  triangle(300,200,400,100,500,200); // the triangle() function creates a triangle. I've decided to lay the triangle on top of the rectangle to create a house.
  
  rect(375,350,50,100); // the rect(0) function creates a rectangle, the first two numbers in the parenthesis designate the location. The second set create the size.
  
  ellipse(415,400,5,5); // the ellipse() function creates a circle - like the rect() functions the first set of #'s is for location and the second for size
  
  strokeWeight(2) // using this function to reduce thickness of line from 4 to 2
  quad(330,240,330,280,370,280,370,240); // small square for window 1
  quad(430,240,430,280,470,280,470,240); // small square for window 2 
  
  strokeWeight(1) // using this function to reduce line thickness for the window frames
  line(330,260,370,260); // the line() function creates a line between two points. For this example I ran the line horizontally through the first 'window'
  line(350,240,350,280); // used to create a vertical line through first window
  
  line(430,260,470,260); // used to create horizontal line through second window
  line(450,240,450,280); // used to create vertical line through second window
  
}