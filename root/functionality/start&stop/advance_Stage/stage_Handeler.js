
var shopItemsHelmets = [{stageOne:[armor[1],armor[3]]}]
var shopItemsPlates = [{stageOne:[armor[0],armor[2]]}]
var shopItemsSword = [{stageOne:weapon[0]}]
var shopItemsMace = [{stageOne:weapon[12]}]
var shopItemsShield = [{stageOne:weapon[6]}]
var unbought = {chestplate:undefined,helmet:undefined}
var allCurrent = {chestplate:{0:undefined,1:undefined},helm:{0:undefined,1:undefined}};
var shopTwo = 0;
var shopThree = 0;
var shopFour = 0;
var shopFive = 0;

var shldStrt = 6;
var swrdStrt = 0;
var maceStrt = 12;

var stopMet = 0
var stopPlat = 0;

function nextShopForming() {
    if (stageNumber > 2 ) {
        if (shopTwo == 0) {
            var stageTwoHelm = [[unbought.helmet],[armor[5]]];
            var stageTwoPlates = [[unbought.chestplate],[armor[4]]];
            var stageTwoSword = weapon[1];
            var stageTwoMace = weapon[13];
            var stageTwoShield = weapon[7];
            shopItemsMace[0].stageTwo = stageTwoMace;
            shopItemsSword[0].stageTwo = stageTwoSword;
            shopItemsHelmets[0].stageTwo = stageTwoHelm;
            shopItemsPlates[0].stageTwo = stageTwoPlates;
            shopItemsShield[0].stageTwo = stageTwoShield;
            unbought = {chestplate:undefined,helmet:undefined}
            allCurrent = {chestplate:{0:undefined,1:undefined},helm:{0:undefined,1:undefined}};
            stopPlat = 0;
            stopMet = 0;
          shopTwo++
        }
    }
    if (stageNumber > 4) {
      if (shopThree == 0) {
            var stageThreeHelm = [[unbought.helmet],[armor[7]]];
            var stageThreePlates = [[unbought.chestplate],[armor[6]]]
            var stageThreeSword = weapon[2];
            var stageThreeMace = weapon[14];
            var stageThreeShield = weapon[8];
            shopItemsMace[0].stageThree = stageThreeMace;
            shopItemsSword[0].stageThree = stageThreeSword;
            shopItemsHelmets[0].stageThree = stageThreeHelm;
            shopItemsPlates[0].stageThree = stageThreePlates;
            shopItemsShield[0].stageThree = stageThreeShield;
            shopThree++;
      }
    }
    if (stageNumber > 6) {
      if (shopFour == 0) {
        //code
            var stageFourHelm = [[unbought.helmet],[armor[9]]];
            var stageFourPlates = [[unbought.chestplate],[armor[8]]]
            var stageFourSword = weapon[3];
            var stageFourMace = weapon[15];
            var stageFourShield = weapon[9];
            shopItemsMace[0].stageFour = stageFourMace;
            shopItemsSword[0].stageFour = stageFourSword;
            shopItemsHelmets[0].stageFour = stageFourHelm;
            shopItemsPlates[0].stageFour = stageFourPlates;
            shopItemsShield[0].stageFour = stageFourShield;
            shopFour++;
      }
    }
    if (stageNumber > 8) {
      if (shopFive == 0) {
        //code    
            var stageFiveHelm = [[unbought.helmet],[armor[11]]];
            var stageFivePlates = [[unbought.chestplate],[armor[10]]]
            var stageFiveSword = weapon[4];
            var stageFiveMace = weapon[16];
            var stageFiveShield = weapon[10];
            shopItemsMace[0].stageFive = stageFiveMace;
            shopItemsSword[0].stageFive = stageFiveSword;
            shopItemsHelmets[0].stageFive = stageFiveHelm;
            shopItemsPlates[0].stageFive = stageFivePlates;
            shopItemsShield[0].stageFive = stageFiveShield;
            shopFive++;
      }
    }
}
  setInterval(nextShopForming,100)
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
var met =0;
var plat =0;
function colorAdder(stage) {
            ctx.beginPath();//begins to draw ball on the canvas
     ctx.rect(stage.x, stage.y, stage.width, stage.height);//draw the box
     if (stage.color == "red") {
      if (stageNumber == 2) {
        //code
        if (stopMet < 1) {
        allCurrent.helm[met] = shopItemsHelmets[0].stageOne[met];
        
        }
        if (met >= 1) {
            stopMet++;
        }
        ctx.drawImage(shopItemsHelmets[0].stageOne[met].img,stage.x, stage.y, stage.width, stage.height);
      }
      if (stageNumber == 4 || stageNumber == 3) {
        //code
        if (stopMet < 1) {
        allCurrent.helm[met] = shopItemsHelmets[0].stageTwo[met];
        
        }
        if (met >= 1) {
            stopMet++;
        }
        ctx.drawImage(shopItemsHelmets[0].stageTwo[met].img,stage.x, stage.y, stage.width, stage.height);
      }
        met++;
        if (met >=2) {
            met=0
        }
     }if (stage.color == "blue") {
            if (stageNumber < 3) {
        if (stopPlat < 1) {
        allCurrent.chestplate[plat] = shopItemsPlates[0].stageOne[plat];
        console.log("keeps getting here")
        }
        if (plat >= 1) {
            stopPlat++;
        }

      }
        ctx.drawImage(shopItemsPlates[0].stageOne[plat].img,stage.x, stage.y, stage.width, stage.height);
        plat++;
        if (plat >=2) {
            plat=0
        }
     }if (stage.color == "green") {
      if (stageNumber < 3) {
        //code
        ctx.drawImage(shopItemsSword[0].stageOne.img,stage.x, stage.y, stage.width, stage.height);
      }


        //ctx.drawImage(swordImg,stage.x, stage.y, stage.width, stage.height);
     }if (stage.color == "black") {
      if (stageNumber < 3) {
        //code
        ctx.drawImage(shopItemsShield[0].stageOne.img,stage.x, stage.y, stage.width, stage.height);
      }
     }
    if (stage.color == "cyan") {
      if (stageNumber < 3) {
        //code
        ctx.drawImage(shopItemsMace[0].stageOne.img,stage.x, stage.y, stage.width, stage.height);
      }
     }

        ctx.strokeStyle = "black";//default black
  ctx.stroke();//end draw

}