//ai placements will take the AI class and npc class and use them to place them
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

function placeNpc(npc){//function place Npc

   ctx.beginPath();//begins to draw ai 
   ctx.arc(npc.x, npc.y, 10, 0, Math.PI*2); //draws the ai based on npc x and y, and location
   ctx.fillStyle = "clear";
     ctx.strokeStyle = "black";

   //ctx.drawImage(npcImg, npc.xPos - 19, npc.yPos - 19, 45, 35);
   ctx.stroke();
}
