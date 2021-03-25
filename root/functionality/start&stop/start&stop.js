var c = document.getElementById("myCanvas");//canvas variables
var ctx = c.getContext("2d");

var gameState = false;//State of the game
var up = false;//variable to detect if the w key is peing pressed down
var down = false;//variable to detect if the s key is peing pressed down
var left = false;//variable to detect if the a key is peing pressed down
var right = false;//variable to detect if the d key is peing pressed down
var stage = undefined;
//@function nextStage() : Advances and sets stage layouts
//@param stageNum [integer] {restricted : 0< stageNum < 7 : Whole Numbers} : The stage number 
function nextStage(stageNum) {
    stage = new Stages(stageNum);//updates the stage
}
nextStage(1);//tells to start the stage at one
var player = new Player(stage.playerSpawn.x, stage.playerSpawn.y, 100, 1, 3);//forms the player


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
var enemies = [];
function makeThemSpawn() {
    for (var i = 0; i < stage.enemy.length;i++) {
        enemies.push(new Npc({x:stage.enemy[i].x,y:stage.enemy[i].y}, 100, 10, 1,"Peasant"));
    }
}
makeThemSpawn();


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

//@function npcMovement() : Handles all movement of all Curently Living NPC
function npcMovement() {
    var peasant = new MakeAI("Peasant", "Weakling");
    var gladiator = new MakeAI("Gladiator", "Warrior");
    var tiger = new MakeAI("Tiger", "Giant_Cat");
    var boss = new MakeAI("Boss", "Destroyer");
    for (var i = 0; i < enemies.length;i++) {
      if (enemies[i].pos.x + 10 > c.width){// this is to prevent the player from running off the map
      enemies[i].pos.x = c.width - 10;
      }
      if (enemies[i].pos.x -10 < 0){// this is to prevent the player from running off the map
        enemies[i].pos.x  = 10;
      }

      var xAdd = 0;
      var yAdd = 0;
      if (enemies[i].type == "Peasant") {
        if (enemies[i].pos.x !== player.xPos) {
          var add = enemies[i].pos.x - player.xPos;
          if (add < 0) {
            var randomNess = randomNumber(0.1,1);
             if (randomNess> 0.75) {
              xAdd= -1;
            }else{
           xAdd=1;
              
            }
            //code
          }
          else if (add > 0) {
            var randomNess = randomNumber(0.1,1);
             if (randomNess> 0.75) {
              xAdd= 1;
            }else{
              
           xAdd= -1;
            }
          }
            //code
        }
        if (enemies[i].pos.y !== player.yPos) {
          var add = enemies[i].pos.y - player.yPos;
          if (add < 0) {
            var randomNess = randomNumber(0.1,1);

            if (randomNess> 0.75) {
              yAdd= -1;
            }else{
              
            yAdd=1;
            }
            //code
          }
          else if (add > 0) {
            var randomNess = randomNumber(0.1,1);
            if (randomNess> 0.75) {
              yAdd= 1;
            }else{
              yAdd= -1;
            }
          }
            //code
        }
              enemies[i].pos.y += yAdd;
              enemies[i].pos.x += xAdd;

        for (var j= 0; j < stage.objects.amount; j++) {//Checks to see if the player is atempting to move into a spot that is should not be
    if ((enemies[i].pos.x  >= stage.objects.locations[j].x && enemies[i].pos.x  <= stage.objects.locations[j].x + 30) || (enemies[i].pos.x  + 10 >= stage.objects.locations[j].x && enemies[i].pos.x  + 10 <= stage.objects.locations[j].x + 30) || (enemies[i].pos.x - 10 >= stage.objects.locations[j].x && enemies[i].pos.x - 10 <= stage.objects.locations[j].x + 30)) {
      if ((enemies[i].pos.y >= stage.objects.locations[j].y && enemies[i].pos.y <= stage.objects.locations[j].y + 30) || (enemies[i].pos.y - 10 >= stage.objects.locations[j].y && enemies[i].pos.y - 10 <= stage.objects.locations[j].y + 30) || (enemies[i].pos.y + 10 >= stage.objects.locations[j].y && enemies[i].pos.y + 10 <= stage.objects.locations[j].y + 30)) {

        if(xAdd == 1) {//prevents the player from going inside of objects that are suposed to be soild
          enemies[i].pos.x  -= 1;
        }
        else if(xAdd == -1) {//prevents the player from going inside of objects that are suposed to be soild
          enemies[i].pos.x+= 1;
        }
        if (yAdd == 1) {//prevents the player from going inside of objects that are suposed to be soild
          enemies[i].pos.y-= 1;
        }
        else if (yAdd == -1) {//prevents the player from going inside of objects that are suposed to be soild
          enemies[i].pos.y += 1;
        }
      }
    }
  }
      }
      if (enemies[i].type == "Gladiator") {
        
      }
      if (enemies[i].type ==  "Tiger") {
        
      }
      if (enemies[i].type ==  "Boss") {
        
      }
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
setInterval(makeThemSpawn, 5000);//interval for updates 
setInterval(fileHandeler, 20);//interval for updates


