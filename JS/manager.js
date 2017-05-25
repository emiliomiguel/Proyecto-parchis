
var positions= [];
for (var i = 0; i < 9 * 29; i += 29) {
   positions.push(i);
}
console.log(positions); //1-9//


for (var i=0; i<7; i++) {
  positions.push(232);
}
console.log(positions); //9-16//


for (var i=0; i<2 ; i += 1) {
positions.push(positions[positions.length-1]+29);
}6
console.log(positions); //17-18//


for (var i=0; i<7; i++) {
  positions.push(290);
}
console.log(positions); //19-25//


for (var i = 0; i < 8; i += 1) {
   positions.push(positions[positions.length-1]+29);
}
console.log(positions); //26-33//


for (var i=0; i<2 ; i += 1) {
positions.push(positions[positions.length-1]);
}
console.log(positions); //34-36//


for (var i = 0; i < 8; i += 1) {
   positions.push(positions[positions.length-1]-29);
}
console.log(positions); //36-42//


for (var i=0; i<7; i++) {
  positions.push(290);
}
console.log(positions); //43-50//


for (var i=0; i<2 ; i += 1) {
positions.push(positions[positions.length-1]-29);
}
console.log(positions); //51-52//


for (var i=0; i<7; i++) {
  positions.push(232);
}
console.log(positions); //53-59//


for (var i = 0; i < 8; i += 1) {
   positions.push(positions[positions.length-1]-29);
}
console.log(positions); //60-67//

positions.push(0);

console.log(positions); //68/
