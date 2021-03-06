/*
Modifying a previous code to show how defining objects makes the code neater and easier to read. I have blocked out all code except for the objects
that I am modifying ( 4 small grey ellipses)
Lines 26 - 49 is where my modification begins, in my previous code I had to keep going down the alphabet to create differnt circle variables, defining
an object allows you to use the same variable name for a different object (in this case it's better beacuse you want to name your variables something 
that you can easily identify when reading your code)
for ex: when I see circX I assume that variable will be tied to the x location of a shape. If i see circM i have to go to my variables to check what that is. 
you can distinguish each objects value because you have named the variables differently (even though their assignment names are the same)
ex: circ1, circ2, circ3 (these all have different x and y coordinates but you can call on them by using circ1.x, circ2.x, circ3.x)

Basic shapes, color and moving variables
Created by Grace Zuniga May 11 2017
*/

var circA = 0; // creating variable circA 
var circB = 27; // creating variable circB
var circC = 35; // creating variable circ
var circD = 70; // creating variable circD
/*var circS = 462; // creating variable circS
var circM = 465; // creating variable circM
var circO = 467; // creating variable circO
var circK = 120; // creating variable circK
var circE = 100; // creating variable circE
var circF = 110; // creating variable circF
var circG = 90;  // creating variable circG
*/
var circSizeA = 50; // creating variable circSizeA
var circSizeB =45; // creating variable circSizeB


 var circ1 = { // creating var circ1 with following values
  x: 465, // x valued at 465
  y: 120, // y valued at 120
  diam: 10, // diam valued at 10
  speed: 1 // speed valued at 1
}
var circ2 = {// creating var circ1 with following values
  x: 465,//x valued at 465
  y: 100, // y valued at 100
  diam:15, // diam valued at 15
  speed: 1 // speed valued at 1
}
var circ3 = {// creating var circ1 with following values
  x: 467, // x valued at 467
  y: 110, // y valued at 110
  diam: 17, // diam valued at 17
  speed: 1 // speed valued at 1
}
var circ4 = {//creating var circ1 with following values
  x: 467, // x valued at 467
  y: 90, // y valued at90
  diam: 8, // diam valued at 8
  speed: 1 // speed valued at 1
}

function setup() { // the parenthesis holds arguments or parameters
  createCanvas(750,550); // this function establishes a canvas 750 x 550
 // background(102,153,255); // will set background color blue
}

function draw() { //contains statements and lines of code
 background(102,153,255); // will set background color blue
 /* fill(0,163,0); //will fill quad color
  noStroke(); // will allow quad to be created without outline
  quad(0,400,0,550,750,550,750,400) // will create quad according to coordinates and size given
  
  stroke(0); // stroke color set to black
  strokeWeight(4); // the strokeWeight() function creates a thicker line
  fill(153,77,0); // will fill quad color
  quad(300,200,300,450,500,450,500,200); // the quad() function creates a 4 sided shape. In this example it produces a rectangle, x,y coordinates go counter clockwise
  
  stroke(102,153,255); // will assign outline color
  strokeWeight(2.5) // will assign outline thickness
  fill(255); // will fill in color of ellipses
  ellipse(circA,70,circSizeA,circSizeA) // creates a circle according to variable values assigned
  ellipse(circB,80,circSizeA, circSizeA) // creates a circle according to variable values assigned
  ellipse(circC,50,circSizeB,circSizeB) // creates a circle according to variable values assigned
  ellipse(circD,70,circSizeA,circSizeA) // creates a circle according to variable values assigned
  
  circA = circA +.5; // variable circA will increase by .5 everytime code is run to result in moving across the screen
  circB = circB +.5; // variable circB will increase by .5 everytime code is run to result in moving across the screen
  circC = circC +.5; // variable circC will increase by .5 everytime code is run to result in moving across the screen
  circD = circD + .5; // variable circD will increase by .5 everytime code is run to result in moving across the screen*/
  
  stroke(102,153,255); // assigns color to the shape's outline
  fill(135); // fills in color of following circles
 
  ellipse(circ1.x,circ1.y,circ1.diam, circ1.diam); //creates a circle according to values assigned to variables
  ellipse(circ2.x,circ2.y,circ2.diam,circ2.diam); //creates a circle according to values assigned to variables
  ellipse(circ3.x,circ3.y,circ3.diam,circ3.diam) //creates a circle according to values assigned to variables
  ellipse(circ4.x, circ4.y,circ4.diam,circ4.diam); //creates a circle according to values assigned to variables
  
  circ1.x = circ1.x + circ1.speed; // variable circ1.x (x) will increase by circ1.speed
  circ1.y = circ1.y - circ1.speed; // variable circ1.y (y) will decrease by circ1.speed
  circ2.x = circ2.x + circ2.speed; // variable circ2.x (x) will increase by circ2.speed
  circ2.y = circ2.y - circ2.speed; // variable circ2.x(y)  will decrease by circ2.speed
  circ3.x = circ3.x + circ3.speed; // variable circ3.x (x) will increase by circ3.speed
  circ3.y = circ3.y - circ3.speed; // variable circ3.y (y) will decrease by circ3.speed
  circ4.x = circ4.x + circ4.speed; // variable circ4.x (x) will increase by circ4.speed
  circ4.y = circ4.y - circ4.speed; // variable circ4.y (y) will decrease by circ4.speed
  
  /*stroke(0); // assigns color to outline
  fill(204,0,0); // will fill triangle color
  quad(450,120,450,200,475,200,475,120); //creates a quad according to coordinates and size assigned
  triangle(300,200,400,100,500,200); // the triangle() function creates a triangle. I've decided to lay the triangle on top of the rectangle to create a house.
  
  stroke(0); // assigns color to outline
  fill(205); // will fill rectangle color
  rect(375,350,50,100); // the rect(0) function creates a rectangle, the first two numbers in the parenthesis designate the location. The second set create the size.
  ellipse(415,400,5,5); // the ellipse() function creates a circle - like the rect() functions the first set of #'s is for location and the second for size
  
  strokeWeight(2); // using this function to reduce thickness of line from 4 to 2
  fill(255,255,153); // will fill color or windows
  quad(330,240,330,280,370,280,370,240); // small square for window 1
  quad(430,240,430,280,470,280,470,240); // small square for window 2 
  
  strokeWeight(1) // using this function to reduce line thickness for the window frames
  line(330,260,370,260); // the line() function creates a line between two points. For this example I ran the line horizontally through the first 'window'
  line(350,240,350,280); // used to create a vertical line through first window
  
  line(430,260,470,260); // used to create horizontal line through second window
  line(450,240,450,280); // used to create vertical line through second window*/
  
}