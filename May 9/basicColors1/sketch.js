/* 
  Basic Colors Sketch
  */
function setup() {
   createCanvas(500,500)
}

function draw() {
  background(250,128,128); // the background() function assigns a color to the background. In this example I am using RGB values.
  // Creating a quad in the upper left half of the canvas
stroke(0,200,0); // the stroke() function assigns a color to the outline
strokeWeight(4); // the strokeWeight() function allows for a thicker line
fill(0,100,150); // the fill() function fills the shape with the color assigned
quad(0,0,0,250,250,250,250,0); // the quad function creates a four sided shape according to the coordinates listed, connecting the points counter clockwise

// Creating a quad in the bottom right half of the canvas
stroke(0,100,150); // assigns ouline color. In this example I used the color used to fill in the previous quad 
fill(0,200,0); // using this function to fill in the color for the quad
quad(250,250,250,500,500,500,500,250); // using this function to create a quad in the bottom right corner

noStroke(); // the noStroke() function creates the shape without an outline
c = color(220, 160, 220, 255); // using the c = color function to assign RGB values to the first shape, and an alpha 'alternate color' (grayscale)
fill(c); // this function will fill in shape with RGB values (220,160,220) - assigned in previous line
ellipse(20, 50, 25, 50); // using this function to create an ellipse at the x=20, y=50 location, and sizing shape 25 wide and 50 tall
value = alpha(c); // this line is assigning "value" to the alpha c we included in color (line 22)
fill(value); // this line will fill the next figure according to the color of alpha (in this example it is 255/white)
ellipse(50, 20, 50, 25); // this creates an ellipse at x=50, y=20, and sized 50 (wide) by 25 (length)

fill(0); // this function will fill the next shapes (grayscale 0/black)
ellipse(375,125,150,150); // this function creates a circle the first set of numbers designates location, the second set will create the size.
ellipse(125,375,150,150); // using this function to create a circle in the bottom left quadrant.
}