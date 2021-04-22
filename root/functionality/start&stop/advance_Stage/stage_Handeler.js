//@function setLocations() : Ceneral draw function that draws everything were it is supposed to be
//@param player [class:Object] {restricted:Must come from player_Class.js class player} : just player things 
function setLocations(player) {
     for (var i = 0; i < stage.enemy.length;i++) {
     placeNpc(stage.enemy[i]);//place NPC
     }
     for (var k = 0; k < enemies.length;k++) {
     placeNpc(enemies[k].pos,"enemy",enemies[k].type);//place NPC
     }
     for (var j = 0; j < stage.objects.amount;j++) {
        placeObjects(stage.objects.locations[j]);//Place Objects
     }
     placeObjects({x:(stage.playerSpawn.x-30),y:(stage.playerSpawn.y-30)},"green");//Place player spawn
     drawPlayer(player);//Place Player
}
var helmImg = new Image();
helmImg.src = "itemImgs/basicHelm.png";
helmImg.onload = function(){
}
var chestImg = new Image();
chestImg.src = "itemImgs/basicPlate.png";
chestImg.onload = function(){
}
var swordImg = new Image();
swordImg.src = "itemImgs/basicSword.png";
swordImg.onload = function(){
}
var shieldImg = new Image();
shieldImg.src = "itemImgs/basicShield.png";
shieldImg.onload = function(){
}
var maceImg = new Image();
maceImg.src = "itemImgs/basicMace.png";
maceImg.onload = function(){
}
var buyBtn = new Image();
buyBtn.src = "itemImgs/buyButton.png";
buyBtn.onload = function(){
}
var cancelBtn = new Image();
cancelBtn.src = "itemImgs/cancel.png";
cancelBtn.onload = function(){
}
function setShop(stage) {
       ctx.beginPath();//begins to draw ball on the canvas
          ctx.rect(stage.shop.border.x, stage.shop.border.y, stage.shop.border.width, stage.shop.border.height);//draw the box
          for (var i = 0; i < stage.shop.imgLocs.length;i++) {            
               colorAdder(stage.shop.imgLocs[i]);//draw the box
          }
          for (var i = 0; i < stage.shop.buttonLoc.length;i++) {
            if (i == 0) {
                var img = buyBtn;
            }if (i == 1) {
                var img = cancelBtn;
                //code
            }
               ctx.drawImage(img,stage.shop.buttonLoc[i].x, stage.shop.buttonLoc[i].y, stage.shop.buttonLoc[i].width, stage.shop.buttonLoc[i].height);//draw the box
        ctx.strokeStyle = "black";//default black
          }
  ctx.stroke();//end draw
}

function colorAdder(stage) {
            ctx.beginPath();//begins to draw ball on the canvas
     ctx.rect(stage.x, stage.y, stage.width, stage.height);//draw the box
     if (stage.color == "red") {
        ctx.drawImage(helmImg,stage.x, stage.y, stage.width, stage.height);
     }if (stage.color == "blue") {
        ctx.drawImage(chestImg,stage.x, stage.y, stage.width, stage.height);
     }if (stage.color == "green") {
        ctx.drawImage(swordImg,stage.x, stage.y, stage.width, stage.height);
     }if (stage.color == "black") {
        ctx.drawImage(shieldImg,stage.x, stage.y, stage.width, stage.height);
     }
    if (stage.color == "cyan") {
        ctx.drawImage(maceImg,stage.x, stage.y, stage.width, stage.height);
     }

        ctx.strokeStyle = "black";//default black
  ctx.stroke();//end draw

}