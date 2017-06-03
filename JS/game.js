var Game = function(){

}

Game.prototype.drawBoard = function(){
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


  for (var i = 0; i < 1; i += 1) {
     y.push(y[y.length-1]+15);
  }
  //console.log(y); //27-33//

  for (var i = 0; i < 7; i += 1) {
     y.push(y[y.length-1]+29);
  }


  for (var i=0; i<2 ; i += 1) {
  y.push(y[y.length-1]);
  }
  //console.log(y); //34-36//


  for (var i = 0; i < 7; i += 1) {
     y.push(y[y.length-1]-29);
  }
  //console.log(y); //36-42//


  for (var i=0; i<8; i++) {
    y.push(348);
  }
  //console.log(y); //43-50//


  for (var i=0; i<2 ; i += 1) {
  y.push(y[y.length-1]-58);
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
  var x= [0,0,0,0,0,0,0,0,0,29,58,87,116,145,174,203,203,203,174,145,116,87,58,29,0,-10,0,0,0,0,0,0,0,-77,-120,-120,-120,-120,-120,-120,-120,-120,-150,-185,-215,-245,-275,-305,-335,-365,-365,-365,-335,-305,-275,-245,-215,-185,-150,-120,-120,-120,-120,-120,-120,-120,-120,-70];
  var newx= x.map(function(num){
    return num + 365;
  });
  // var yred= [537,508,479,450,421,392,363,320];
  // var xred= [288,288,288,288,288,288,288,288];
  //
  var yyellow= [29,58,87,116,145,174,203,250];
  var xyellow=[285,285,285,285,285,285,285,285];

    x=newx;
    console.log(x);

////////////Entrada roja y yellow////////////



  ///////////////////////////////////////////////////////////////////////

  for(var i = 1; i <= x.length-1; i++) {
    var $newCell = $("<div class='cell' id='" + i + "'></div>");
    $newCell.css({
      bottom: y[i] + "px",
      left: x[i] + "px"
    })
    $("#main").append($newCell);
  }

  for(var i = 68; i < 76; i++) {
    var $newCell = $("<div class='cell' id='" + i + "'></div>");

    $newCell.css({
      bottom: yyellow[i - 68] + "px",
      left: xyellow[i - 68] + "px"
    })

    $("#main").append($newCell);
  }
};




/////////dado/////////
Game.prototype.dado = function(){
  var numero_cara = Math.floor(Math.random()*6)+1;
  var newImg = "img/cara" + numero_cara + ".png";
  // replace dice src
  $("#dice").attr("src", newImg);
  $(".current").html("");
  var current = $(".current").attr("id");
  var next = parseInt(current) + numero_cara;
  // if (next >67 && next===75) {
  //   console.log("pieza dentro");
  // } else if (next >67 && next >75){
  //
  // }
  if (next > 75) {
    next = 75 - (next - 75)
    $(".current").removeClass("current");
    $("#" + next).html("X").addClass("current");
  } else if (next === 75) {
    alert("oh yeah!")
    $("#75").append(" X!");
    $("#0").html("X").addClass("current");
  } else {
    $(".current").removeClass("current");
    $("#" + next).html("X").addClass("current");
  }
  // if (next >= 68) {
  //   next -= 68
  // }
}
