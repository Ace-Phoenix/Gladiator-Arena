var c = document.getElementById("myCanvas");//canvas variables
var ctx = c.getContext("2d");

var gameState = false;//State of the game
var up = false;//variable to detect if the w key is peing pressed down
var down = false;//variable to detect if the s key is peing pressed down
var left = false;//variable to detect if the a key is peing pressed down
var right = false;//variable to detect if the d key is peing pressed down
var stage = new Stages(1);
var stageNumber = 1;
var player = new Player(stage.playerSpawn.x, stage.playerSpawn.y, 100, 10, 3,0,1);//forms the player
var appliedEffects = [undefined,undefined];//player status effects
//@function nextStage() : Advances and sets stage layouts
//@param stageNum [integer] {restricted : 0< stageNum < 7 : Whole Numbers} : The stage number
function nextStage(stageNum) {
    stage = new Stages(stageNum);//updates the stage
    player.xPos = stage.playerSpawn.x;
    player.yPos = stage.playerSpawn.y;
    setNumber = 0;
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



var enemies = [];//all the enemies
//@function makeThemSpawn : makes them spawn
function makeThemSpawn() {
    for (var i = 0; i < stage.enemy.length;i++) {
        enemies.push(new Npc({x:stage.enemy[i].x,y:stage.enemy[i].y}, stage.enemy[i].hp, stage.enemy[i].dam, 1,stage.enemy[i].type,stage.enemy[i].aT,stage.enemy[i].aS));//makes new
    }
}

var setNumber = 0;//interator
var afterSpawn = false;
//@function sets : amount of sets that are in the stage
function sets() {
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
sets();//starting

//@function randomNumber() : gets a random number used for peasants
//@param min [integre] : number for the min value
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
                if (enemies[i].hp <= 0) {//enemy is dead
                    enemies.splice(i,1);//remove dead guy
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
    if (enemies[i].pos.x + 10 > c.width) {enemies[i].pos.x = c.width - 10;}
    if (enemies[i].pos.x -10 < 0) {enemies[i].pos.x  = 10;}
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
      if (((enemies[i].pos.x+xAdd) > player.xPos-20 && (enemies[i].pos.x+xAdd)< player.xPos+20) && ((enemies[i].pos.y+yAdd) > player.yPos-20&&(enemies[i].pos.y+yAdd) < player.yPos+20)) { }
      else {
        enemies[i].pos.x += xAdd;
        enemies[i].pos.y += yAdd;
      }
      for (var j= 0; j < stage.objects.amount; j++) {//Checks to see if the player is atempting to move into a spot that is should not be
        if ((enemies[i].pos.x  >= stage.objects.locations[j].x && enemies[i].pos.x  <= stage.objects.locations[j].x + 30) || (enemies[i].pos.x  + 10 >= stage.objects.locations[j].x && enemies[i].pos.x  + 10 <= stage.objects.locations[j].x + 30) || (enemies[i].pos.x - 10 >= stage.objects.locations[j].x && enemies[i].pos.x - 10 <= stage.objects.locations[j].x + 30)) {
          if ((enemies[i].pos.y >= stage.objects.locations[j].y && enemies[i].pos.y <= stage.objects.locations[j].y + 30) || (enemies[i].pos.y - 10 >= stage.objects.locations[j].y && enemies[i].pos.y - 10 <= stage.objects.locations[j].y + 30) || (enemies[i].pos.y + 10 >= stage.objects.locations[j].y && enemies[i].pos.y + 10 <= stage.objects.locations[j].y + 30)) {
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
        if (((enemies[i].pos.x+xAdd) > player.xPos-20 && (enemies[i].pos.x+xAdd)< player.xPos+20) && ((enemies[i].pos.y+yAdd) > player.yPos-20&&(enemies[i].pos.y+yAdd) < player.yPos+20)) { }
        else{
          enemies[i].pos.x += xAdd;
          enemies[i].pos.y += yAdd;
        }
      }
      for (var j= 0; j < stage.objects.amount; j++) {//Checks to see if the player is atempting to move into a spot that is should not be
        if ((enemies[i].pos.x  >= stage.objects.locations[j].x && enemies[i].pos.x  <= stage.objects.locations[j].x + 30) || (enemies[i].pos.x  + 10 >= stage.objects.locations[j].x && enemies[i].pos.x  + 10 <= stage.objects.locations[j].x + 30) || (enemies[i].pos.x - 10 >= stage.objects.locations[j].x && enemies[i].pos.x - 10 <= stage.objects.locations[j].x + 30)) {
          if ((enemies[i].pos.y >= stage.objects.locations[j].y && enemies[i].pos.y <= stage.objects.locations[j].y + 30) || (enemies[i].pos.y - 10 >= stage.objects.locations[j].y && enemies[i].pos.y - 10 <= stage.objects.locations[j].y + 30) || (enemies[i].pos.y + 10 >= stage.objects.locations[j].y && enemies[i].pos.y + 10 <= stage.objects.locations[j].y + 30)) {
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
        if (((enemies[i].pos.x+xAdd) > player.xPos-20 && (enemies[i].pos.x+xAdd)< player.xPos+20) && ((enemies[i].pos.y+yAdd) > player.yPos-20&&(enemies[i].pos.y+yAdd) < player.yPos+20)) { }
        else {
          enemies[i].pos.x += xAdd;
          enemies[i].pos.y += yAdd;
        }
      }
      if (((enemies[i].pos.x+xAdd) > player.xPos-20 && (enemies[i].pos.x+xAdd)< player.xPos+20) && ((enemies[i].pos.y+yAdd) > player.yPos-20&&(enemies[i].pos.y+yAdd) < player.yPos+20)) { }
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
        if (((enemies[i].pos.x+xAdd) > player.xPos-20 && (enemies[i].pos.x+xAdd)< player.xPos+20) && ((enemies[i].pos.y+yAdd) > player.yPos-20&&(enemies[i].pos.y+yAdd) < player.yPos+20)) { }
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
  npcMovement();
  setLocations(player);
  if(right == true) {//Allows the player to move to the right
    player.xPos += 1;
    if (player.xPos + 10 > c.width){// this is to prevent the player from running off the map
      player.xPos = c.width - 10;
    }
  }
  else if(left == true) {//Allows the player to move to the left
    player.xPos -= 1;
    if (player.xPos-10 < 0){// this is to prevent the player from running off the map
      player.xPos = 10;
    }
  }
  if (down == true) {//Allows the player to move down
    player.yPos += 1;
    if (player.yPos + 10 > c.width){// this is to prevent the player from running off the map
      player.yPos = c.width - 10;
    }
  }
  else if (up == true) {//Allows the player to move up
    player.yPos -= 1;
    if (player.yPos-10 < 0) {// this is to prevent the player from running off the map
      player.yPos = 10;
    }
  }

  for (var i = 0; i < stage.objects.amount; i++) {//Checks to see if the player is atempting to move into a spot that is should not be
    if ((player.xPos >= stage.objects.locations[i].x && player.xPos <= stage.objects.locations[i].x + 30) || (player.xPos + 10 >= stage.objects.locations[i].x && player.xPos + 10 <= stage.objects.locations[i].x + 30) || (player.xPos - 10 >= stage.objects.locations[i].x && player.xPos - 10 <= stage.objects.locations[i].x + 30)) {
      if ((player.yPos >= stage.objects.locations[i].y && player.yPos <= stage.objects.locations[i].y + 30) || (player.yPos - 10 >= stage.objects.locations[i].y && player.yPos - 10 <= stage.objects.locations[i].y + 30) || (player.yPos + 10 >= stage.objects.locations[i].y && player.yPos + 10 <= stage.objects.locations[i].y + 30)) {
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

 function playerAttack(){
  if (player.attackTimer !== player.attackSpeed) {
    player.attackTimer+=0.1;
  }
}


document.addEventListener('click', clickLoc, false);
function clickLoc(e) {
    var mousepos = mousePos(e);
    var enemyClicked = [];
    for (var i = 0; i < enemies.length;i++) {
          if (mousepos.xPos > enemies[i].pos.x -10 && mousepos.xPos < enemies[i].pos.x +10) {
              if (mousepos.yPos > enemies[i].pos.y - 10 && mousepos.yPos < enemies[i].pos.y +10) {
                enemyClicked=enemies[i];
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
             console.log("clicked");
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
setInterval(applyEffects, 100);//interval for updates
