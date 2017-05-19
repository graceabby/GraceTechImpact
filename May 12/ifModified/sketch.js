/*
Code by Prof D modified by Grace Zuniga May 12 2017
*/

var circX = 200; // creates variable circX
var circY = 200; // creates variable circY
var circStroke = 125; // creates variable circStroke
var circR = 55; // creates variable circR
var circG = 135; // creates variable circG
var circB = 225 // creates variable circB
var circSize = 75; // creates variable circSize
var recX = 100; // creates variable recX
var recY = 300; // creates variable recY
var recStroke = 35; // creates variable recStroke
var recCol = 0; // creates variable recCol
var recSize = 75; // creates variable recSize
var canvBG; // creates variable canvBG
canvBG = 125, 55, 255; // assigns values 125, 55, 255 to variable canvasBG
var speed = 2; // creates variable speed
var triX = 100; // creates variable triX
var triY = 150; // creates variable triY
var triZ = 200; // creates variable triZ
var triA = 250; // creates variable triA

function setup() { // 
  createCanvas(400,400) // creates a canvas sized 400 by 400
}

function draw() {
  background(canvBG); // assigns color to the background according to the value of canvBG
  stroke(circStroke); // assigns stroke color according to value of circStroke
  fill(circR, circG, circB); // fills color according to varibles circR, circG, circB
  stroke(circStroke); // assigns stroke color according to value of circStroke
  ellipse(circX, circY, circSize, circSize); // creates shape according to variable values
  ellipse(circX +50, circY - 75, circSize, circSize); // creates shape accordind to variable values
  fill(circR, circG, circB, 135); // fills color according to variable values
  
  circX = circX + speed; // variable circX will increase by the value of variable speed = 2
    stroke(recStroke); // determines stroke color according to variable recStroke
    fill(recCol); // fills color according to recCol variable value
    rect(recX, recY, recSize, recSize); // creates a rectangle according to variable values
    triangle(triX,triY,triZ,triA,triY,triY); // creates a trianlge according to variable values
    
    recY = recY - speed; // variable recY will decrease by the value of speed = 2 
    
    triY = triY + speed; // variable triY increases by speed = 2
    triX = triX + speed; // variable triX increases by speed = 2
    triZ = triZ + speed; // variable triZ increases by speed = 2
    triA = triA + speed; // variable triA increases by speed = 2
    
    
    if(circX > width || circX < 0) { // reads as if variable circX is less than the width of the canvas 
    // or if circX is less than 0 then execute the next line of code
    
      speed = speed *-1; // the variable speed will be multiplied by -1
    }
}