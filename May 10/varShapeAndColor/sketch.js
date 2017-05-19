/* Sketch will create color and shape using variables
Code by Grace Zuniga May 2017
*/

var circX = 100; // creates variable circX and assigns the value 100
var circY = 200; // creates the variable circY and assigns the variable 200
var circSize = 50; // creates the variable circSize and assignsthe value 50
var circR = 35; // creates the variable circR and assigns the value 35
var circG = 150; // creates the value circG and assigns the value 150
var circB = 70; // creates the value circB and assigns the value 70


function setup() {
  createCanvas(600, 600); // creates canvas sized 600 by 600
  
}

function draw() {
  
  fill(circR, circG, circB); // fills shape according to variable values
  ellipse(circX, circY, circSize, circSize); // creates shape according to variable values
  
}