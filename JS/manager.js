
var y= [];
for (var i = 0; i < 9 * 29; i += 29) {
   y.push(i);
}
//console.log(y); //1-9//


for (var i=0; i<7; i++) {
  y.push(232);
}
//console.log(y); //9-16//


for (var i=0; i<2 ; i += 1) {
y.push(y[y.length-1]+58);
}
//console.log(y); //17-18//


for (var i=0; i<7; i++) {
  y.push(348);
}
//console.log(y); //19-25//


for (var i = 0; i < 8; i += 1) {
   y.push(y[y.length-1]+29);
}
//console.log(y); //26-33//


for (var i=0; i<2 ; i += 1) {
y.push(y[y.length-1]);
}
//console.log(y); //34-36//


for (var i = 0; i < 8; i += 1) {
   y.push(y[y.length-1]-29);
}
//console.log(y); //36-42//


for (var i=0; i<7; i++) {
  y.push(290);
}
//console.log(y); //43-50//


for (var i=0; i<2 ; i += 1) {
y.push(y[y.length-1]-29);
}
//console.log(y); //51-52//


for (var i=0; i<7; i++) {
  y.push(232);
}
//console.log(y); //53-59//


for (var i = 0; i < 8; i += 1) {
   y.push(y[y.length-1]-29);
}
//console.log(y); //60-67//

y.push(0);

console.log(y); //68/


//////////////////////////////////////////////////////////////
var x= [0,0,0,0,0,0,0,0,0,29,58,87,116,145,174,203,203,203,174,145,116,87,58,29,0,0,0,0,0,0,0,0,0,-77,-120,-120,-120,-120,-120,-120,-120,-120,-120,-116,-145,-174,-203,-232,-261,-290,-290,-290,-261,-232,-203,-174,-145,-190,-150,-120,-120,-120,-120,-120,-120,-120,-120,-70];
var newx= x.map(function(num){
  return num + 365;
});
x=newx;
console.log(x);


//var yy = [];

//yy= [0,0,0,0,0,0,0,0,0,29,58,87,116,145,174,203,203,203];
//var trans=[];
//trans= yy.reverse();
//console.log(trans);
//var f = yy.concat(trans);
//console.log(f);

///////////////////////////////////////////////////////////////////////

for(var i = 1; i <= x.length; i++) {
  var $newCell = $("<div class='cell' id='" + i + "'></div>");

  $newCell.css({
    bottom: y[i] + "px",
    left: x[i] + "px"
  })

  $("#main").append($newCell);
}
