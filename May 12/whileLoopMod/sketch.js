/*
Code by Professor D, modified by Grace Zuniga May 12 2017
*/

function setup() {
  createCanvas(600,400);  // creates canvas sized 600 by 400
}

function draw() {
    background(14, 56, 105); // assigns bacground this color
  
   var y = 0; // assigns 0 to var y
     while(y <= height){ // while loop, var y is less than or equal to height then follow next lines
      stroke(255); // outline white
      fill(0); // fill in shape black
      ellipse(100, y, 50, 50); // create circle at 100, and y sized 50 by 50
      y = y + 50; // keep adding 50 to new y created
}
      
    var y = 0; // assigns 0 to var y
    while(y <= height) { //while loop, var y is less than or equal to height carry out next lines of code
      stroke(0); // outline color black
      fill(255); // fill shape white
      rect(200, y, 50, 50); // create rectangle at these coordinates sized 50 by 50
      y = y + 50; // add 50 to variable y
    }
    
    for(y =0; y<= height; y+= 50) { // foor loop, var y is less than or equal to height, add 50 for new y
      stroke(255); // stroke color white
      fill(0); // fill in shape black
      rect(300, y, 50, 50); // create rectagle at these coordinates sized 50 by 50 
      
    }
}