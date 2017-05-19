/*
https://vimeo.com/channels/learningp5js/139587730
*/

function setup() {
  // var angle= degrees(PI/2);
  // console.log(angle);
  
  //var km = milesToKm(26.3);
  //console.log(km);
  
  //var km2 = milesToKm(100);
  //console.log(km2);
  
  // console.log(milesToKm(90));
  
  var pou = dollarsToPou(1) // creates variable pou and assigns it the result of function dollarsToPou ; requesting resule for input 1
  console.log(pou); // return value of variable pou
}

//function milesToKm(miles) {
  //var km = miles * 1.6;
 // return km;
 
 function dollarsToPou(dollars) { // defines function dollarsToPou with following values
   var pou = dollars * 1.29 // variable pou is valued at 1.29 times input (this case 1) 
   return pou; // return calue of pou
 }