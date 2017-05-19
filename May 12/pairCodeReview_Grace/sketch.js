/*
Grace typer, Shani driver

Code revision by Grace
This code was created so that a flickering filled circle could move up and down the screen. Through the if function
we were able to have the system define variable y everytime the code was read, meaning it allowed the same circle to be
drawn at a different y everytime, providing the illusion of the circle moving up and down the canvas. The random function
assigned a different grayscale to the circle everytime the code was read, providing the flickering illusion.
*/


var circX = 200; // creates variable circX
var circY = 200; // creates variable circY
var circSize = 100; // creates variable circSize
var speed = .5 // creates variable speed

// format of creating and assigning variables is clear. In comments mention what value is being assigned to variables for further clarity

function setup() {
  createCanvas(400,400); // sets canvas size to 400 by 400
  
}

function draw() {
  
  background(255); // sets background color white
  stroke(255); // outline color white
  fill(random (255)); // assigns random color to shape grayscale
  ellipse(circX, circY, circSize, circSize); // creates ellipse according to variable values
  
  // code above establishes background white and creates a circle (filled random shades of grayscale, outlined black)
  
  circY = circY + speed;  // increases circY variable by speed = .5
  
// code above allows for vertical movement of the circle on the screen
  
  if (circY > height || circY < 0){ // if circY is greater than or less than 0 then execute next line
    circSize += 1; // circSize will increase 1 each loop (edit: is this code necessary? does not affect when blocked out)
    
    // line 30 allows for Y to be redifined everytime code is read, new y allows for ellipse to be created at different points vertically
    
    speed = speed * -1;// speed will will be multiplied by -1
    
  // code above assigns at what speed the circle will move
  
  }
}