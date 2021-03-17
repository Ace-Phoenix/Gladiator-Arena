//ai placements will take the AI class and npc class and use them to place them
function placeNpc(npc){

   ctx.beginPath();//begins to draw ball on the canvas
   ctx.arc(npc.xPos, npc.yPos, npc.rad, 0, Math.PI*2); //Draws the player using it's pre-determined loation and radius.
   ctx.fillStyle = "clear";
   ctx.drawImage(npcImg, npc.xPos - 19, npc.yPos - 19, 45, 35);
   ctx.stroke();
}