function drawPlayer() {

  ctx.beginPath();//begins to draw ball on the canvas
  ctx.arc(player.xPos, player.yPos, player.rad, 0, Math.PI*2); //Draws the player using it's pre-determined loation and radius.
  ctx.fillStyle = "clear";

  ctx.drawImage(player, player.xPos - 19, ball.yPos - 19, 45, 35);
  ctx.drawImage(player, player.xPos - 10, player.yPos - 10, 20, 30);
  ctx.stroke();
}
