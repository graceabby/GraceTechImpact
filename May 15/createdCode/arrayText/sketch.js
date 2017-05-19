/*
Created by Grace Zuniga May 2017
*/

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// creates variable months holding these texts

function setup() { 
  createCanvas(600, 600); // creates canvas sized 600 by 600
  background(0);// sets background color to 0
  for(i = 0; i <12; i++) { // for loop establishing variable i, assigning it the value 0, 
  // if i's value is less than 12 add one value to i and execute next line of code.
    console.log(months[i]); // display on screen months[i]
    stroke(255);// outline is white
    fill(255); // fill white
    textSize(18); // text displayed sized at 18
    text(months[i], 100, i * 30 + 75); // text displayed is months [i] and when rereading this code display
    // next tex at x = 100, y = 1 *30 + 75
  }
}
// no draw function needed
function draw() {
  
}