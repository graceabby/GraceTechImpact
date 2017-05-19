/*
array of objects.
code by Dawn C. Hayes March 2017
*/

var stars = []// declare an empty array
var moon; // creates variable moon
var comet= [] // creates variable comet

function setup() {
  createCanvas(600,400); // creates canvas 600 by 400
  
  for(var i = 0; i < 400; i++) { // for loop to iterate throught the loop and increment
    stars[i] = { // object with array
      x1: random(0, width), // place x postion randomly between 0 and width
      y1: random(0, 250), // place y postion randomly between 0 and 250
      display: function() { // values needed for fdisplay function
        stroke(255); // outline random grayscale 
        fill(random(255),random(255),random(255)); // fills random color
        ellipse(this.x1, this.y1, 5,5); // creates shapes according to variable values
    }
    }
   }
moon = { // moon values 
  x: 100, //value of x coordinate
  y: 350, // value y coordinate
  diam: 100, // value of diameter
  xspeed: .5, // value of xspeed
  yspeed: .5 // value of yspeed
}

cloud = { // cloud values
  x: 50, // value of x coordinate
  y: 150, // value of y coordinate
  diam: 75, // value of dia
  col:255 // value of color
  }
  
/* comet = { // comet values
   x: 600, // x coordinate
   y: 100, // y coordinate
   diam:10, // diameter
   xspeed: 1.5, // xspeed
   yspeed: 1.5// yspeed
 
}*/
}

function draw() {
  background(0, 14, 35) // background color
  for( var i = 0; i < stars.length; i++){ //iterate through the stars array
    stars[i].display(); // display each star
  }
  noStroke(); // no outline
  fill(225, 225, 134); // fill this color
  ellipse(moon.x, moon.y, moon.diam, moon.diam); // create moon with these values
  
  if(moon.x > 0 || moon.x < width && moon.y > 0 || moon.x < height) { // if function meants criteria carry out next code
    moon.x = moon.x + moon.xspeed; // x coordinate motion
    moon.y = moon.y - moon.yspeed; // y coordinate motion
}
  stroke(255); // outlne white 
  fill(random(255)); // fill white
  ellipse(comet.x, comet.y, comet.diam, comet.diam); // create comet with these values
  
  if(comet.x > 0 || comet.x <width && comet.y >0 || comet.x < height){ // if function meets carry next code
    comet.x = comet.x - comet.xspeed;// x motion
    comet.y = comet.y - comet.yspeed; // y motion
    
  }
// make a cloud constuctor function to replace verbose code

noStroke();
fill(cloud.col);
ellipse(cloud.x, cloud.y, cloud.diam, cloud.diam);
ellipse(cloud.x +30, cloud.y -15, cloud.diam, cloud.diam + 35);
ellipse(cloud.x, cloud.y +10, cloud.diam + 30, cloud.diam);
ellipse(cloud.x, cloud.y + 10, cloud.diam, cloud.diam);
ellipse(cloud.x + 30, cloud.y +15, cloud.diam + 70, cloud.diam);
ellipse(cloud.x, cloud.y + 10, cloud.diam + 30, cloud.diam);

noStroke();
fill(cloud.col);
ellipse(cloud.x, cloud.y, cloud.diam, cloud.diam);
ellipse(cloud.x +90, cloud.y - 15, cloud.diam, cloud.diam + 70);
ellipse(cloud.x, cloud.y + 10, cloud.diam + 30, cloud.diam);
ellipse(cloud.x, cloud.y + 10, cloud.diam, cloud.diam);
ellipse(cloud.x + 90, cloud.y + 15, cloud.diam + 70, cloud.diam);
ellipse(cloud.x, cloud.y + 10, cloud.diam + 30, cloud.diam);
}