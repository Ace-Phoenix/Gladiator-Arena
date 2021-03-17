//this will not only place but also update the player [movement]function drawCircle() { //This function will draw the player that will be controlled by the player

  ctx.beginPath();//begins to draw ball on the canvas
  ctx.arc(player.xPos, player.yPos, player.rad, 0, Math.PI*2); //Draws the player using it's pre-determined loation and radius.
  ctx.fillStyle = "clear";

  ctx.drawImage(player, player.xPos - 19, ball.yPos - 19, 45, 35);
  ctx.stroke();
}
