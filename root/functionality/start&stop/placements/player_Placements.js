var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//@function drawPlayer() [Function:Placement:Player] : places the player
//@param player [Class:Object] {restricted : Must be made from player_Class.js Class player} : players needs
function drawPlayer(player) {

  ctx.beginPath();//begins to draw ball on the canvas
  ctx.arc(player.xPos, player.yPos, 10, 0, Math.PI*2); //Draws the player using it's pre-determined loation and radius.
  ctx.strokeStyle = "blue";//blue
  ctx.fillStyle = "blue";//blue 

  //ctx.drawImage(playerImg, player.xPos - 10, player.yPos - 10, 20, 30);
  ctx.stroke();
}
