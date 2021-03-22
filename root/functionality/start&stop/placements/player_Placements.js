var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

function drawPlayer() {

  ctx.beginPath();//begins to draw ball on the canvas
  ctx.arc(player.xPos, player.yPos, 10, 0, Math.PI*2); //Draws the player using it's pre-determined loation and radius.
  ctx.fillStyle = "clear";

  ctx.drawImage(playerImg, player.x - 10, player.y - 10, 20, 30);
  ctx.stroke();
}
