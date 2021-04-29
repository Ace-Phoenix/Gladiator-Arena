
//Core Mechanics
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
var c = document.getElementById("myCanvas");//canvas variables
var ctx = c.getContext("2d");

var gameState = false;//State of the game
var up = false;//variable to detect if the w key is peing pressed down
var down = false;//variable to detect if the s key is peing pressed down
var left = false;//variable to detect if the a key is peing pressed down
var right = false;//variable to detect if the d key is peing pressed down
var stage = new Stages(2);
var stageNumber = 2;
var player = new Player(stage.playerSpawn.x, stage.playerSpawn.y, 100, 10, 3,0,1);//forms the player
var appliedEffects = [undefined,undefined];//player status effects

var playerImg = new Image();
playerImg.src = "sprites/player.png";
playerImg.onload = function(){
  initAllOnScreen();
}
var enemies = [];//all the enemies
    var peasantImg = new Image();
      peasantImg.src = "sprites/peasant.png";
    peasantImg.onload = function(){
  initAllOnScreen();
    }
    var gladiatorImg = new Image();
      gladiatorImg.src = "sprites/gladiator.png";
    gladiatorImg.onload = function(){
  initAllOnScreen();
    }
    var tigerImg = new Image();
      tigerImg.src = "sprites/tiger.png";
    tigerImg.onload = function(){
  initAllOnScreen();
    }
    var bossImg = new Image();
      bossImg.src = "sprites/boss.png";
    bossImg.onload = function(){
  initAllOnScreen();
    }

var playerScale = 0.80
function init(img,locat){
  ctx.drawImage(img,0,0,64,64,locat.x-26,locat.y-26,64*playerScale,64*playerScale);

cycle("init",img,{x:locat.x,y:locat.y});
}
function drawFrame(img,number,scale,x,y) {
  if (number == 0) {
    ctx.drawImage(img,0,0,64,64,x,y,64*scale,64*scale);
  }if (number == 1) {
    ctx.drawImage(img,64,0,64,64,x,y,64*scale,64*scale);
  }if (number == 2) {
    ctx.drawImage(img,0,64,64,64,x,y,64*scale,64*scale);
  }if (number == 3) {
    ctx.drawImage(img,64,64,64,64,x,y,64*scale,64*scale);    
  }
}
var itterAnim = 0;
function cycle(from,img,target) {
  drawFrame(img,itterAnim,playerScale,target.x-26,target.y-26);

  if (from == "init") {
  drawFrame(img,itterAnim,playerScale,target.x-26,target.y-26);
  if (itterAnim >3) {
    itterAnim = 0;
  }
    //code
  }
}
function cycleAllOnScreen() {
  for (var i = 0; i < enemies.length;i++) {
    if (enemies[i].type == "Peasant") {
      cycle("",peasantImg,{x:enemies[i].pos.x,y:enemies[i].pos.y});
    }
    if (enemies[i].type == "Gladiator") {
        //code
       cycle("",gladiatorImg,{x:enemies[i].pos.x,y:enemies[i].pos.y});
   }
    if (enemies[i].type == "Tiger") {
        //code
      cycle("",tigerImg,{x:enemies[i].pos.x,y:enemies[i].pos.y});
    }
    if (enemies[i].type == "Boss") {
        //code
      cycle("",bossImg,{x:enemies[i].pos.x,y:enemies[i].pos.y});
    }
cycle("",playerImg,{x:player.xPos,y:player.yPos});

  }
}
function initAllOnScreen() {
  itterAnim++;
if (enemies.length!== 0) {
  for (var i = 0; i < enemies.length;i++) {
    if (enemies[i].type == "Peasant") {
      init(peasantImg,{x:enemies[i].pos.x,y:enemies[i].pos.y});
    }
    if (enemies[i].type == "Gladiator") {
        //code
       init(gladiatorImg,{x:enemies[i].pos.x,y:enemies[i].pos.y});
   }
    if (enemies[i].type == "Tiger") {
        //code
      init(tigerImg,{x:enemies[i].pos.x,y:enemies[i].pos.y});
    }
    if (enemies[i].type == "Boss") {
        //code
      init(bossImg,{x:enemies[i].pos.x,y:enemies[i].pos.y});
    }
  }
}
      init(playerImg,{x:player.xPos,y:player.yPos});

}



//@function nextStage() : Advances and sets stage layouts
//@param stageNum [integer] {restricted : 0< stageNum < 7 : Whole Numbers} : The stage number
function nextStage(stageNum) {
    stage = new Stages(stageNum);//updates the stage
    if (stage.playerSpawn !== undefined) {
        //code
    player.yPos = stage.playerSpawn.y;
    player.xPos = stage.playerSpawn.x;
    setNumber = 0;
    }
}


while (gameState == true) {
  //game run
}

//listen to see if a key has been pressed. If yes, run fuction
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

//If the key is pressed down, set the movment direction corredponding to the key to true
//@function keyDownHandler() [Event Function] : Function that handles the keyDown
//@param e [Object:Key] : keys that is pressed
function keyDownHandler(e) {
  if (e.key == "w") {//North movement
    up = true;//setting up to true
  }
  if (e.key == "s") {//South movement
    down = true;
  }
  if (e.key == "a") {//West movement
    left = true;
  }
  if (e.key == "d") {//East movement
    right = true;
  }
}

//If the key is released,  set the movment direction corredponding to the key to false
//@function keyUpHandler [Event Function] : handles all key ups
//@param e [Object:Key] : Key that is pressed
function keyUpHandler(e) {
  if (e.key == "w") {//North stop movement
    up = false;
  }
  if (e.key == "s") {//South stop movement
    down = false;
  }
  if (e.key == "a") {//West stop movement
    left = false;
  }
  if (e.key == "d") {//East stop movement
    right = false;
  }
}



//@function makeThemSpawn : makes them spawn
function makeThemSpawn() {
  if (stage.enemy !== undefined) {
    for (var i = 0; i < stage.enemy.length;i++) {
        //code
        enemies.push(new Npc({x:stage.enemy[i].x,y:stage.enemy[i].y}, stage.enemy[i].hp, stage.enemy[i].dam, 1,stage.enemy[i].type,stage.enemy[i].aT,stage.enemy[i].aS));//makes new
      }
    }
}
var setNumber = 0;//interator
var afterSpawn = false;
//@function sets : amount of sets that are in the stage
function sets() {
  if (stage.enemy !== undefined) {
    //code
  if ((stage.enemy.length == 0 && enemies.length == 0 ) || afterSpawn == false) {
    if (setNumber!==stage.sets) {//amount of sents passed
        makeThemSpawn();
        setNumber++;
        afterSpawn = true;
    }//allowed to spawn
  }
  if (enemies.length == 0 ) {//if all dead
        afterSpawn = false;//allow new spawns
        if (setNumber == stage.sets) {//if it was the final set
          stageNumber++;//add to stage
          nextStage(stageNumber)//set next stage
        }
  }
  }
}
sets();//starting

//@function randomNumber() : gets a random number used for peasants
//@param min [integer] : number for the min value
//@param max [integer] : number for the max value
//@returns retNumber [integer:random] : random number between min and max
function randomNumber(min,max) {
    var retNumber = 0;
    for (var i = 0; i < 20;i++) {
       retNumber = Math.random()*(max-min)+min;
    }
    return retNumber;
}

//@function npcCollision() : the collision of all enemies
  function npcCollision() {
    player.attackTimer+=0.1;//add to attack timer
      if (player.attackTimer>player.attackSpeed) {//attack timer over the speed set zero
          player.attackTimer = 0;
      }else{
          player.attackTimer = Math.round(player.attackTimer*10)/10;//Keeping it all to the first decimal point
      } 
      for (var i = 0; i<enemies.length;i++) {
          if ((enemies[i].pos.x  >= player.xPos-18 && enemies[i].pos.x  <= player.xPos + 18) || (enemies[i].pos.x  + 10 >= player.xPos-18 && enemies[i].pos.x  + 10 <= player.xPos + 18) || (enemies[i].pos.x - 10 >= player.xPos-18 && enemies[i].pos.x - 10 <= player.xPos + 18)) {
              if ((enemies[i].pos.y >= player.yPos-18 && enemies[i].pos.y <= player.yPos + 18) || (enemies[i].pos.y - 10 >= player.yPos-18 && enemies[i].pos.y - 10 <= player.yPos + 18) || (enemies[i].pos.y + 10 >= player.yPos-18 && enemies[i].pos.y + 10 <= player.yPos + 18)) {
                if (enemies[i].attackTimer >= enemies[i].attackSpeed) {//attack params for npc
                    var randomNess = randomNumber(0,1);
                        if (appliedEffects[0] !== undefined || applyEffects[1] !== undefined) {
                            if (appliedEffects[0].name == "Dodge" || applyEffects[1].name == "Dodge") {
                                if (applyEffects[0].name == "Dodge" && applyEffects[1].name == "Dodge") {
                                    if (randomNess >=(applyEffects[1].percentage+applyEffects[0].percentage)) {
                                        player.hp -= enemies[i].dam;
                                    }
                                }
                                else if (applyEffects[0].name == "Dodge" && randomNess >=applyEffects[0].percentage) {
                                    player.hp -= enemies[i].dam;

                                }
                                else if (applyEffects[1].name == "Dodge" && randomNess >=applyEffects[1].percentage) {
                                    player.hp -= enemies[i].dam;
                                }
                            }else{
                              player.hp -= enemies[i].dam;
                            }
                        }else{
                          player.hp -= enemies[i].dam;
                        }
                    enemies[i].attackTimer=0;
                }else {
                      enemies[i].attackTimer+=0.1;
                  }
                if (player.hp <= 0) {//player is dead
                    //later
                }
              }
          }
      }
  }


//@function npcMovement() : Handles all movement of all Curently Living NPC
function npcMovement() {
  var peasant = new MakeAI("Peasant", "Weakling");
  var gladiator = new MakeAI("Gladiator", "Warrior");
  var tiger = new MakeAI("Tiger", "Giant_Cat");
  var boss = new MakeAI("Boss", "Destroyer");
  for (var i = 0; i < enemies.length;i++) {
    if (enemies[i].pos.x + 20 > c.width) {enemies[i].pos.x = c.width - 20;}
    if (enemies[i].pos.x -20 < 0) {enemies[i].pos.x  = 20;}
    var xAdd = 0;
    var yAdd = 0;
    if (enemies[i].type == "Peasant") {
      if (enemies[i].pos.y == player.yPos) {
        var add = enemies[i].pos.y - player.yPos;
        if (add == 0) {
          var randomNess = randomNumber(0.1,1);
          if (randomNess> 0.50) {yAdd= -1;}
          else {yAdd=1;}
        }
      }
      if (enemies[i].pos.x == player.xPos) {
        var add = enemies[i].pos.x - player.xPos;
        if (add == 0) {
          var randomNess = randomNumber(0.1,1);
          if (randomNess> 0.50) {xAdd= -1;}
          else{xAdd=1;}
        }
      }
      if (enemies[i].pos.x !== player.xPos) {
        var add = enemies[i].pos.x - player.xPos;
        if (add < 0) {
          var randomNess = randomNumber(0.1,1);
          if (randomNess> 0.75) {xAdd= -1;}
          else {xAdd=1;}
        }
        else if (add > 0) {
          var randomNess = randomNumber(0.1,1);
          if (randomNess> 0.75) {xAdd= 1;}
          else {xAdd= -1;}
        }
      }
      if (enemies[i].pos.y !== player.yPos ) {
        var add = enemies[i].pos.y - player.yPos;
        if (add == 0) {
          var randomNess = randomNumber(0.1,1);
          if (randomNess> 0.50) {yAdd= -1;}
          else {yAdd=1;}
        }
        if (add < 0) {
          var randomNess = randomNumber(0.1,1);
          if (randomNess> 0.75) {yAdd= -1;}
          else {yAdd=1;}
          }
        else if (add > 0) {
          var randomNess = randomNumber(0.1,1);
          if (randomNess> 0.75) {yAdd= 1;}
          else {yAdd= -1;}
        }
      }
      if (((enemies[i].pos.x+xAdd) > player.xPos-40 && (enemies[i].pos.x+xAdd)< player.xPos+40) && ((enemies[i].pos.y+yAdd) > player.yPos-40&&(enemies[i].pos.y+yAdd) < player.yPos+40)) { }
      else {
        enemies[i].pos.x += xAdd;
        enemies[i].pos.y += yAdd;
      }
      for (var j= 0; j < stage.objects.amount; j++) {//Checks to see if the player is atempting to move into a spot that is should not be
        if ((enemies[i].pos.x  >= stage.objects.locations[j].x && enemies[i].pos.x  <= stage.objects.locations[j].x + 60) || (enemies[i].pos.x  + 20 >= stage.objects.locations[j].x && enemies[i].pos.x  + 20 <= stage.objects.locations[j].x + 60) || (enemies[i].pos.x - 20 >= stage.objects.locations[j].x && enemies[i].pos.x - 20 <= stage.objects.locations[j].x + 60)) {
          if ((enemies[i].pos.y >= stage.objects.locations[j].y && enemies[i].pos.y <= stage.objects.locations[j].y + 60) || (enemies[i].pos.y - 20 >= stage.objects.locations[j].y && enemies[i].pos.y - 20 <= stage.objects.locations[j].y + 60) || (enemies[i].pos.y + 20 >= stage.objects.locations[j].y && enemies[i].pos.y + 20 <= stage.objects.locations[j].y + 60)) {
            if (xAdd == 1) {enemies[i].pos.x  -= 1;}
            else if (xAdd == -1) {enemies[i].pos.x+= 1;}
            if (yAdd == 1) {enemies[i].pos.y-= 1;}
            else if (yAdd == -1) {enemies[i].pos.y += 1;}
          }
        }
      }
    }
    if (enemies[i].type == "Gladiator") {
      if (enemies[i].pos.y == player.yPos) {
        var add = enemies[i].pos.y - player.yPos;
        if (add == 0) {yAdd=1;}
      }
      if (enemies[i].pos.x == player.xPos) {
        var add = enemies[i].pos.x - player.xPos;
        if (add == 0) {xAdd=1;}
      }
      if (enemies[i].pos.x !== player.xPos) {
        var add = enemies[i].pos.x - player.xPos;
        if (add < 0) {xAdd=1;}
        else if (add > 0) {xAdd= -1;}
        if (enemies[i].pos.y !== player.yPos) {
          var add = enemies[i].pos.y - player.yPos;
          if (add < 0) {yAdd=1;}
          else if (add > 0) {yAdd= -1;}
        }
      }
      var chanceNotMove = randomNumber(0.1,1);
      if (chanceNotMove < 0.60) {
        if (((enemies[i].pos.x+xAdd) > player.xPos-40 && (enemies[i].pos.x+xAdd)< player.xPos+40) && ((enemies[i].pos.y+yAdd) > player.yPos-40&&(enemies[i].pos.y+yAdd) < player.yPos+40)) { }
        else{
          enemies[i].pos.x += xAdd;
          enemies[i].pos.y += yAdd;
        }
      }
      for (var j= 0; j < stage.objects.amount; j++) {//Checks to see if the player is atempting to move into a spot that is should not be
        if ((enemies[i].pos.x  >= stage.objects.locations[j].x && enemies[i].pos.x  <= stage.objects.locations[j].x + 60) || (enemies[i].pos.x  + 20 >= stage.objects.locations[j].x && enemies[i].pos.x  + 20 <= stage.objects.locations[j].x + 60) || (enemies[i].pos.x - 20 >= stage.objects.locations[j].x && enemies[i].pos.x - 20 <= stage.objects.locations[j].x + 60)) {
          if ((enemies[i].pos.y >= stage.objects.locations[j].y && enemies[i].pos.y <= stage.objects.locations[j].y + 60) || (enemies[i].pos.y - 20 >= stage.objects.locations[j].y && enemies[i].pos.y - 20 <= stage.objects.locations[j].y + 60) || (enemies[i].pos.y + 20 >= stage.objects.locations[j].y && enemies[i].pos.y + 20 <= stage.objects.locations[j].y + 60)) {
            if(xAdd == 1) {enemies[i].pos.x  -= 1;}
            else if(xAdd == -1) {enemies[i].pos.x+= 1;}
            if (yAdd == 1) {enemies[i].pos.y-= 1;}
            else if (yAdd == -1) {enemies[i].pos.y += 1;}
          }
        }
      }
    }
    if (enemies[i].type ==  "Tiger") {
      if (enemies[i].pos.y == player.yPos) {
        var add = enemies[i].pos.y - player.yPos;
        if (add == 0) {yAdd=1;}
      }
      if (enemies[i].pos.x == player.xPos) {
        var add = enemies[i].pos.x - player.xPos;
        if (add == 0) {xAdd=1;}
      }
      if (enemies[i].pos.x !== player.xPos) {
        var add = enemies[i].pos.x - player.xPos;
        if (add < 0) {xAdd=1;}
        else if (add > 0) {xAdd= -1;}
        if (enemies[i].pos.y !== player.yPos ) {
          var add = enemies[i].pos.y - player.yPos;
          if (add < 0) {yAdd=1;}
          else if (add > 0) {yAdd= -1;}
        }
      }
      var chanceMoveFast = randomNumber(0.1,1);
      if (chanceMoveFast > 0.95) {
        if (((enemies[i].pos.x+xAdd) > player.xPos-40 && (enemies[i].pos.x+xAdd)< player.xPos+40) && ((enemies[i].pos.y+yAdd) > player.yPos-40&&(enemies[i].pos.y+yAdd) < player.yPos+40)) { }
        else {
          enemies[i].pos.x += xAdd;
          enemies[i].pos.y += yAdd;
        }
      }
      if (((enemies[i].pos.x+xAdd) > player.xPos-40 && (enemies[i].pos.x+xAdd)< player.xPos+40) && ((enemies[i].pos.y+yAdd) > player.yPos-40&&(enemies[i].pos.y+yAdd) < player.yPos+40)) { }
      else {
        enemies[i].pos.x += xAdd;
        enemies[i].pos.y += yAdd;
      }
    }
    if (enemies[i].type ==  "Boss") {
      if (enemies[i].pos.y == player.yPos) {
        var add = enemies[i].pos.y - player.yPos;
        if (add == 0) {yAdd=1;}
      }
      if (enemies[i].pos.x == player.xPos) {
        var add = enemies[i].pos.x - player.xPos;
        if (add == 0) {xAdd=1;}
      }
      if (enemies[i].pos.x !== player.xPos) {
        var add = enemies[i].pos.x - player.xPos;
        if (add < 0) {xAdd=1;}
        else if (add > 0) {xAdd= -1;}
        if (enemies[i].pos.y !== player.yPos ) {
          var add = enemies[i].pos.y - player.yPos;
          if (add < 0) {yAdd=1;}
          else if (add > 0) {yAdd= -1;}
        }
      }
      var chanceNotMove = randomNumber(0.1,1);
      if (chanceNotMove > 0.85) {
        if (((enemies[i].pos.x+xAdd) > player.xPos-40 && (enemies[i].pos.x+xAdd)< player.xPos+40) && ((enemies[i].pos.y+yAdd) > player.yPos-40&&(enemies[i].pos.y+yAdd) < player.yPos+40)) { }
        else{
          enemies[i].pos.x += xAdd;
          enemies[i].pos.y += yAdd;
        }
      }
    }
  }
}

function applyEffects(){
  var before = appliedEffects;
  var after = [];
  for (var i = 0; i < player.effects;i++) {
    after.push(player.effects[i]);
  }
  if (after[0] == appliedEffects[0] && after[1] == appliedEffects[1]) {
    //code
  }else{
    applyEffects = after;
    }
}

//@function fileHandeler() : handelers all files and folders
//essentially makes the game run
//-collision
//-movement
//-updating
function fileHandeler() {
  //make new enemies, removes the ones that die, places player, updade for movment and collision of player, and refresh
  //Tells stage handler what stage to use
  ctx.clearRect(0, 0, c.width, c.height);
cycleAllOnScreen();
  npcMovement();
  if (stage.playerSpawn.x !== undefined) {
    //code
  setLocations(player);
  if(right == true) {//Allows the player to move to the right
    player.xPos += 1;
    if (player.xPos + 20 > c.width){// this is to prevent the player from running off the map
      player.xPos = c.width - 22;
    }
  }
  else if(left == true) {//Allows the player to move to the left
    player.xPos -= 1;
    if (player.xPos-20 < 0){// this is to prevent the player from running off the map
      player.xPos = 22;
    }
  }
  if (down == true) {//Allows the player to move down
    player.yPos += 1;
    if (player.yPos + 20 > c.width){// this is to prevent the player from running off the map
      player.yPos = c.width - 22;
    }
  }
  else if (up == true) {//Allows the player to move up
    player.yPos -= 1;
    if (player.yPos-20 < 0) {// this is to prevent the player from running off the map
      player.yPos = 22;
    }
  }

  for (var i = 0; i < stage.objects.amount; i++) {//Checks to see if the player is atempting to move into a spot that is should not be
    if ((player.xPos >= stage.objects.locations[i].x && player.xPos <= stage.objects.locations[i].x + 60) || (player.xPos + 20 >= stage.objects.locations[i].x && player.xPos + 20 <= stage.objects.locations[i].x + 60) || (player.xPos - 20 >= stage.objects.locations[i].x && player.xPos - 20 <= stage.objects.locations[i].x + 60)) {
      if ((player.yPos >= stage.objects.locations[i].y && player.yPos <= stage.objects.locations[i].y + 60) || (player.yPos - 20 >= stage.objects.locations[i].y && player.yPos - 20 <= stage.objects.locations[i].y + 60) || (player.yPos + 20 >= stage.objects.locations[i].y && player.yPos + 20 <= stage.objects.locations[i].y + 60)) {
        if(right == true) {//prevents the player from going inside of objects that are suposed to be soild
          player.xPos -= 1;
        }
        else if(left == true) {//prevents the player from going inside of objects that are suposed to be soild
          player.xPos += 1;
        }
        if (down == true) {//prevents the player from going inside of objects that are suposed to be soild
          player.yPos -= 1;
        }
        else if (up == true) {//prevents the player from going inside of objects that are suposed to be soild
          player.yPos += 1;
        }
        }

      }
  }
  }
  else {
    setShop(stage);
  }
}

 function playerAttack(){
  if (player.attackTimer !== player.attackSpeed) {
    player.attackTimer+=0.1;
  }
}

var clicked = undefined;
document.addEventListener('mousedown', clickLoc, false);
function clickLoc(e) {
    var mousepos = mousePos(e);
    var enemyClicked = [];
    if (stage.shop !== undefined) {
      for (var i = 0; i < stage.shop.buttonLoc.length;i++) {
        var w = stage.shop.buttonLoc[i].width;
        var h = stage.shop.buttonLoc[i].height;
        var x = stage.shop.buttonLoc[i].x;
        var y = stage.shop.buttonLoc[i].y;
        if ((mousepos.yPos >= y && mousepos.yPos <= (h+y))&&(mousepos.xPos >= x && mousepos.xPos <= (w+x))) {
            if (stage.shop.buttonLoc[i].type == "buy") {
                console.log("Buying " + " Nothing because there is nothing");
            }
            if (stage.shop.buttonLoc[i].type == "cancel") {
                console.log("Canceling " + "... there is nothing to cancel");
            }
        }
      }
      for (var i = 0; i < stage.shop.imgLocs.length;i++) {//starter for loop to go through the stage shp list 
        var w = stage.shop.imgLocs[i].width;//width of the current imgLoc
        var h = stage.shop.imgLocs[i].height;//current height
        var x = stage.shop.imgLocs[i].x;//current x
        var y = stage.shop.imgLocs[i].y;//current y
        if ((mousepos.yPos >= y && mousepos.yPos <= (h+y))&&(mousepos.xPos >= x && mousepos.xPos <= (w+x))) {//mouse positions
                    for (var k = 0; k < stage.shop.imgLocs.length;k++) {
                        if (stage.shop.imgLocs[k]!==clicked && clicked!== undefined) {
                            stage.shop.imgLocs[k].width = stage.shop.imgLocs[k].width*2
                            stage.shop.imgLocs[k].height = stage.shop.imgLocs[k].height*2
                        }
                        if (stage.shop.imgLocs[k]==clicked) {
                            stage.shop.imgLocs[k].width = stage.shop.imgLocs[k].width/2
                            stage.shop.imgLocs[k].height = stage.shop.imgLocs[k].height/2

                        }
                    }
                    clicked = stage.shop.imgLocs[i];
                    //code
                for (var j = 0; j < stage.shop.imgLocs.length;j++) {
                  if (stage.shop.imgLocs[j] !== clicked) {
                    if ((clicked.width/4) !== stage.shop.imgLocs[j].width) {
                    stage.shop.imgLocs[j].width = stage.shop.imgLocs[j].width/2
                    }
                    if ((clicked.height/4) !== stage.shop.imgLocs[j].height) {
                    stage.shop.imgLocs[j].height = stage.shop.imgLocs[j].height/2
                    }
                  }
                    //code
                }
                var counter = 0
                for (var l = 0; l < stage.shop.imgLocs.length;l++) {
                    if (clicked == stage.shop.imgLocs[l]) {
                        //code
                        stage.shop.imgLocs[l].x = 90+(135/2)+105;
                        stage.shop.imgLocs[l].y = 85;
                        if (stage.shop.imgLocs[l-1]!== undefined) {
                            //code
                      if (stage.shop.imgLocs[l].width/4 !== stage.shop.imgLocs[l-1].width) {
                        stage.shop.imgLocs[l].width = stage.shop.imgLocs[l].width*2;
                        stage.shop.imgLocs[l].height = stage.shop.imgLocs[l].height*2;
                      }
                        }else{
                      if (stage.shop.imgLocs[l].width/4 !== stage.shop.imgLocs[l+1].width) {
                        stage.shop.imgLocs[l].width = stage.shop.imgLocs[l].width*2;
                        stage.shop.imgLocs[l].height = stage.shop.imgLocs[l].height*2;
                          
                        }
                      }
                    }else{
                      if (counter == 0) {
                        stage.shop.imgLocs[l].x = 20;
                        stage.shop.imgLocs[l].y = 85;
                      }if (counter == 1) {
                        stage.shop.imgLocs[l].x = 20;
                        stage.shop.imgLocs[l].y = 85+(stage.shop.imgLocs[l].height)+10;
                        
                      }if (counter == 2) {
                        stage.shop.imgLocs[l].x = 20;
                        stage.shop.imgLocs[l].y = 85+(stage.shop.imgLocs[l].height*2)+10*2;
                        
                      }if (counter == 3) {
                        stage.shop.imgLocs[l].x = 780-stage.shop.imgLocs[l].width;
                        stage.shop.imgLocs[l].y = 85;
                      }if (counter == 4) {
                        stage.shop.imgLocs[l].x = 780-stage.shop.imgLocs[l].width;
                        stage.shop.imgLocs[l].y = 85+(stage.shop.imgLocs[l].height)+10;
                        
                      }if (counter == 5) {
                        stage.shop.imgLocs[l].x = 780-stage.shop.imgLocs[l].width;
                        stage.shop.imgLocs[l].y = 85+(stage.shop.imgLocs[l].height*2)+10*2;
                        
                      }
                      counter++;
                      if (counter > 5) {
                        counter = 0;
                      }
                    }
                }
            break;
        }
      }
    }
    for (var i = 0; i < enemies.length;i++) {
          if (mousepos.xPos > enemies[i].pos.x -20 && mousepos.xPos < enemies[i].pos.x +20) {
              if (mousepos.yPos > enemies[i].pos.y - 20 && mousepos.yPos < enemies[i].pos.y +20) {
                enemyClicked=enemies[i];
                  if (enemies[i].hp <= 0) {//enemy is dead
                    enemies.splice(i,1);//remove dead guy
                  }
              }
          }
          
    }
    if (enemyClicked.pos !== undefined) {
        var distancePos = {x:(player.xPos-enemyClicked.pos.x),y:(player.yPos-enemyClicked.pos.y)};
        var distanceValue = Math.sqrt(Math.pow(distancePos.x,2)+Math.pow(distancePos.y,2)); 
    }
      if (player.attackTimer>=player.attackSpeed) {//attack params player
        if (distanceValue <= player.attackDist) {
             enemyClicked.hp -= player.dam;
            //code
          player.attackTimer = 0;
        }
      }

}
function mousePos(e) {
  var rect = c.getBoundingClientRect();
  return {
    xPos: e.clientX - rect.left,
    yPos: e.clientY - rect.top
  };
}


setInterval(sets, 100);//interval for updates
setInterval(npcCollision, 100);//interval for updates
setInterval(playerAttack, 100);//interval for updates
setInterval(fileHandeler, 20);//interval for updates
setInterval(initAllOnScreen, 200);//interval for updates
setInterval(applyEffects, 100);//interval for updates
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Inventory Mechanics
var inventoryStage = "Main";
var invC = document.getElementById("inventory");//canvas variables
var invCtx = invC.getContext("2d");

document.addEventListener('mousedown', invLoc, false);
var playerItems = {helms:[],armors:[],weapons:[],shields:[]};
function allTheItems(code) {
    if (code == "All The ITEMS") {
        var helmets = [];
        var armors = [];
        var weapons = [];
        var shields = [];
        for (var i = 0; i < armor.length;i++) {
            if (armor[i].type == "Helmet"){
              helmets.push(armor[i])
            }
            if (armor[i].type == "Chestplate"){
              armors.push(armor[i])
              
            }
        }
        for (var j = 0; j < weapon.length;j++) {
            if (weapon[j].type == "Shield"){
              shields.push(weapon[j])
            }
            else{
              weapons.push(weapon[j])
              
            }
        }
        player.items.helmet = helmets;
        player.items.chestplate = armors;
        player.items.weapon = weapons;
        player.items.shield = shields;
        playerItems = {helms:player.items.helmet,armors:player.items.chestplate,weapons:player.items.weapon,shields:player.items.shield};
    }
}
var equipedItems = {helm:player.equiped.helmet,armor:player.equiped.armor,weapon:player.equiped.weapon,shield:player.equiped.shield}
var itemBoxesMain = [{},{},{},{}];
var selectBoxes = [];
function drawBoxes() {
  invCtx.beginPath();//begins to draw ball on the canvas
  if (inventoryStage == "Main") {
    invCtx.rect(15, 30, 135, 185);//draw the box
        itemBoxesMain[0] = {x:15,y:30,width:135,height:185,item:undefined}
    invCtx.rect(15+135+10, 30, 135, 185);//draw the box
        itemBoxesMain[1] = {x:(15+135+10),y:30,width:135,height:185,item:undefined}
    invCtx.rect(15+135+135+20, 30, 135, 185);//draw the box
        itemBoxesMain[2] = {x:(15+135+135+20),y:30,width:135,height:185,item:undefined}
    invCtx.rect(15+(135*3)+(10*3), 30, 135, 185);//draw the box
        itemBoxesMain[3] = {x:(15+(135*3)+(10*3)),y:30,width:135,height:185,item:undefined}
      invCtx.strokeStyle = "black";//default black
  }else if (inventoryStage == "Helm Select") {
    invCtx.rect(125, 20+((185/1.25)/2), 70, 30);//draw the box
    invCtx.rect(250+125+35, 20+((185/1.25)/2), 70, 30);//draw the box
    //invCtx.font = "100px Arial";
    //invCtx.fillText("Hello World", 10, 50);
    invCtx.rect(250, 30, 135/1.25, 185/1.25);//draw the box
    selectBoxes.push({x:250,y:30,width:135/1.25,height:185/1.25});
    invCtx.moveTo(0, 200);
    invCtx.lineTo(600, 200);    
    invCtx.rect(24, 225, 135/1.50, 185/1.50);//draw the box
    selectBoxes.push({x:24,y:225,width:135/1.50,height:185/1.50});
    invCtx.rect(24*2+5+((135/1.50)), 225, 135/1.50, 185/1.50);//draw the box
    selectBoxes.push({x:24*2+5+((135/1.50)),y:225,width:135/1.50,height:185/1.50});
    invCtx.rect(24*3+5+((135/1.50)*2), 225, 135/1.50, 185/1.50);//draw the box
    selectBoxes.push({x:24*3+5+((135/1.50)*2),y:225,width:135/1.50,height:185/1.50});
    invCtx.rect(24*4+5+((135/1.50)*3), 225, 135/1.50, 185/1.50);//draw the box
    selectBoxes.push({x:24*4+5+((135/1.50)*3),y:225,width:135/1.50,height:185/1.50});
    invCtx.rect(24*5+5+((135/1.50)*4), 225, 135/1.50, 185/1.50);//draw the box
    selectBoxes.push({x:24*5+5+((135/1.50)*4),y:225,width:135/1.50,height:185/1.50});

  }else if (inventoryStage == "Plate Select") {
    invCtx.rect(125, 20+((185/1.25)/2), 70, 30);//draw the box
    invCtx.rect(250+125+35, 20+((185/1.25)/2), 70, 30);//draw the box
    //invCtx.font = "100px Arial";
    //invCtx.fillText("Hello World", 10, 50);
    invCtx.rect(250, 30, 135/1.25, 185/1.25);//draw the box
    selectBoxes.push({x:250,y:30,width:135/1.25,height:185/1.25});
    invCtx.moveTo(0, 200);
    invCtx.lineTo(600, 200);    
    invCtx.rect(24, 225, 135/1.50, 185/1.50);//draw the box
    selectBoxes.push({x:24,y:225,width:135/1.50,height:185/1.50});
    invCtx.rect(24*2+5+((135/1.50)), 225, 135/1.50, 185/1.50);//draw the box
    selectBoxes.push({x:24*2+5+((135/1.50)),y:225,width:135/1.50,height:185/1.50});
    invCtx.rect(24*3+5+((135/1.50)*2), 225, 135/1.50, 185/1.50);//draw the box
    selectBoxes.push({x:24*3+5+((135/1.50)*2),y:225,width:135/1.50,height:185/1.50});
    invCtx.rect(24*4+5+((135/1.50)*3), 225, 135/1.50, 185/1.50);//draw the box
    selectBoxes.push({x:24*4+5+((135/1.50)*3),y:225,width:135/1.50,height:185/1.50});
    invCtx.rect(24*5+5+((135/1.50)*4), 225, 135/1.50, 185/1.50);//draw the box
    selectBoxes.push({x:24*5+5+((135/1.50)*4),y:225,width:135/1.50,height:185/1.50});

  }else if (inventoryStage == "Weapon Select") {
    invCtx.rect(125, 20+((185/1.25)/2), 70, 30);//draw the box
    invCtx.rect(250+125+35, 20+((185/1.25)/2), 70, 30);//draw the box
    //invCtx.font = "100px Arial";
    //invCtx.fillText("Hello World", 10, 50);
    invCtx.rect(250, 30, 135/1.25, 185/1.25);//draw the box
    selectBoxes.push({x:250,y:30,width:135/1.25,height:185/1.25});
    invCtx.moveTo(0, 200);
    invCtx.lineTo(600, 200);    
    invCtx.rect(24, 225, 135/1.50, 185/1.50);//draw the box
    selectBoxes.push({x:24,y:225,width:135/1.50,height:185/1.50});
    invCtx.rect(24*2+5+((135/1.50)), 225, 135/1.50, 185/1.50);//draw the box
    selectBoxes.push({x:24*2+5+((135/1.50)),y:225,width:135/1.50,height:185/1.50});
    invCtx.rect(24*3+5+((135/1.50)*2), 225, 135/1.50, 185/1.50);//draw the box
    selectBoxes.push({x:24*3+5+((135/1.50)*2),y:225,width:135/1.50,height:185/1.50});
    invCtx.rect(24*4+5+((135/1.50)*3), 225, 135/1.50, 185/1.50);//draw the box
    selectBoxes.push({x:24*4+5+((135/1.50)*3),y:225,width:135/1.50,height:185/1.50});
    invCtx.rect(24*5+5+((135/1.50)*4), 225, 135/1.50, 185/1.50);//draw the box
    selectBoxes.push({x:24*5+5+((135/1.50)*4),y:225,width:135/1.50,height:185/1.50});

  }else if (inventoryStage == "Shield Select") {
    invCtx.rect(125, 20+((185/1.25)/2), 70, 30);//draw the box
    invCtx.rect(250+125+35, 20+((185/1.25)/2), 70, 30);//draw the box
    //invCtx.font = "100px Arial";
    //invCtx.fillText("Hello World", 10, 50);
    invCtx.rect(250, 30, 135/1.25, 185/1.25);//draw the box
    selectBoxes.push({x:250,y:30,width:135/1.25,height:185/1.25});
    invCtx.moveTo(0, 200);
    invCtx.lineTo(600, 200);    
    invCtx.rect(24, 225, 135/1.50, 185/1.50);//draw the box
    selectBoxes.push({x:24,y:225,width:135/1.50,height:185/1.50});
    invCtx.rect(24*2+5+((135/1.50)), 225, 135/1.50, 185/1.50);//draw the box
    selectBoxes.push({x:24*2+5+((135/1.50)),y:225,width:135/1.50,height:185/1.50});
    invCtx.rect(24*3+5+((135/1.50)*2), 225, 135/1.50, 185/1.50);//draw the box
    selectBoxes.push({x:24*3+5+((135/1.50)*2),y:225,width:135/1.50,height:185/1.50});
    invCtx.rect(24*4+5+((135/1.50)*3), 225, 135/1.50, 185/1.50);//draw the box
    selectBoxes.push({x:24*4+5+((135/1.50)*3),y:225,width:135/1.50,height:185/1.50});
    invCtx.rect(24*5+5+((135/1.50)*4), 225, 135/1.50, 185/1.50);//draw the box
    selectBoxes.push({x:24*5+5+((135/1.50)*4),y:225,width:135/1.50,height:185/1.50});

  }
  invCtx.stroke();//end draw
}
function inventoryHandeler() {
    invCtx.clearRect(0, 0, invC.width, invC.height);
    drawBoxes();
}
function invLoc(e) {
  var loc = mouseInvPos(e)
  
  if (inventoryStage == "Helm Select") {
  console.log("Helm Select")
  }  
  if (inventoryStage == "Plate Select") {
  console.log("Plate Select")
  
  }  
  if (inventoryStage == "Weapon Select") {
  console.log("Weapon Select")
  
  }  
  if (inventoryStage == "Shield Select") {
  console.log("Shield Select")
    
  }  

  if (inventoryStage == "Main") {
      if ((loc.xPos >= itemBoxesMain[0].x && loc.xPos <= (itemBoxesMain[0].x + itemBoxesMain[0].width))&&(loc.yPos >= itemBoxesMain[0].y && loc.yPos <= (itemBoxesMain[0].y + itemBoxesMain[0].height))) {
          console.log("helm");
          inventoryStage = "Helm Select";
      }  
      if ((loc.xPos >= itemBoxesMain[1].x && loc.xPos <= (itemBoxesMain[1].x + itemBoxesMain[1].width))&&(loc.yPos >= itemBoxesMain[1].y && loc.yPos <= (itemBoxesMain[1].y + itemBoxesMain[1].height))) {
          console.log("Plate");
          inventoryStage = "Plate Select";
      }  
      if ((loc.xPos >= itemBoxesMain[2].x && loc.xPos <= (itemBoxesMain[2].x + itemBoxesMain[2].width))&&(loc.yPos >= itemBoxesMain[2].y && loc.yPos <= (itemBoxesMain[2].y + itemBoxesMain[2].height))) {
          console.log("Weapon");
          inventoryStage = "Weapon Select";
      }  
      if ((loc.xPos >= itemBoxesMain[3].x && loc.xPos <= (itemBoxesMain[3].x + itemBoxesMain[3].width))&&(loc.yPos >= itemBoxesMain[3].y && loc.yPos <= (itemBoxesMain[3].y + itemBoxesMain[3].height))) {
          console.log("Shield");
          inventoryStage = "Shield Select";
      }  
  }
  
}

function mouseInvPos(e) {
  var rect = invC.getBoundingClientRect();
  return {
    xPos: e.clientX - rect.left,
    yPos: e.clientY - rect.top
  };
}

setInterval(inventoryHandeler, 10);//interval for updates
