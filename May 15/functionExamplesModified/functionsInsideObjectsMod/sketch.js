/* 
Code modified by Grace Zuniga May 2017


var float1 = {
  x1: 50,
  y1: 0,
  x2: 150,
  y2: 90,
  speed: 2,
  display: function() { // the display name-value (aka key-value) pair includes a function as its value.
    stroke(random(255), random(255), random(255));
    strokeWeight(2);
    (this.x1, this.y1, this.x2, this.y2); // the keyword "this" references a local variable inside the defined function's object.
  },
  move: function() {
    this.x1 = this.x1 + this.speed;
    this.y1 = this.y1 + this.speed;
    this.y2 = this.y2 + this.speed;
  }
}


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  float1.move();
  float1.display(); */
  
  var circle = { // creates variable circle
    x: 100,// x values at 100
    y: 100, //y valued at 100
    diam: 100, // diam valied at 100 
    speed: 1, // speed valued at 1
    display: function() { // calling display function with following lines to execute
      stroke(255); // outline white
      fill(random(225), random(225), random(225)); // fill object with random colors
      ellipse(this.x, this.y, this.diam); // create shapes accoriding to this variables values
    },
    move: function() { // calling move function with following lines to execute
      this.x = this.x + this.speed; // this variable's x will increase by the value of speed
      this.y = this.y + this.speed; // this variable's y will increase by the value of speed
    }
  }
  
  function setup() {
    createCanvas( 600, 600); // creates canvas sized 600 by 600
    
  }
  function draw() {
    background(0); // background set to black
    circle.move(); // execute move function
    circle.display(); // execute fisplay function
 }