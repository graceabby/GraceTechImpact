/* 
https://vimeo.com/channel.learningp5js/138935677
*/

function setup() {
  createCanvas(600,400); // creates canvas sized 600 by 400
}

function draw() {
  background(0);// sets background color to black
  stroke(255); // sets outline color to white
  strokeWeight(4); // sets outline thickness 
  noFill(); // shape does not have color
  
  if (mouseX > 300 && mouseX < 400 && mouseY > 200 && mouseY < 300){ // if mouse hover meets this criteria execute next line
    if (mouseIsPressed){ // if mouse is pressed execute next line of code
      background(0, 255, 0); // background turns green
    }
    fill(255, 0, 200); // shape is this color when mouse hovers 
  }
  rect(300, 200,100, 100); // creates rectangle 
  
  if(mouseX > 100 && mouseX < 220 && mouseY > 100 && mouseY < 220){ // if mouse hovers meeting this criteria, read next line of code
    if(mouseIsPressed){ // if mouse if pressed execute next line
      background(0,0,255); // make background blue
    }
    fill(random(255));// when mouse hovers fill random grayscale shades
  }
  ellipse(150, 150, 120, 120); // create a circle at this x, y location sized 120 by 120
}



