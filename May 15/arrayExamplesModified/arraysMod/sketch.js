/* 
demonstrates color array.
Code by Dawn C. Hayes March, 2017. Modified by Grace Zuniga May 2017.
*/


//var playlist = ["Spoken For", "Beautiful", "Flawless", "The Generous Mr. Lovewell", "So Long Self", "Greater", "Welcome to the New", "I Can Only Imagine" ];
var playlist = ["Hello", "My Name", "Is Grace"];

function setup() {
 createCanvas(800, 600);
 background(155, 50, 150);
 
	for (i = 0; i < 3; i++) {  // use a for loop() to go through the array by index starting with 0.
 console.log(playlist[i]); // log the list to the console as a check if needed.
stroke(255);
fill(255);
 textSize(55);
 text(playlist[i], i * 100 + 150, i * 100 + 50); // print each string by index, followed by spacing and location of the text.
  }
}

// nothing needs to be drawn here.
function draw() {
  
}