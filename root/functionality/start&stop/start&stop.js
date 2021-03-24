var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
//Functions that tell the game to update and also to start or end game theoretically this will be
//done last and used as a test until everything else is done
var gameState = false;
var up = false;//variable to detect if the w key is peing pressed down
var down = false;//variable to detect if the s key is peing pressed down
var left = false;//variable to detect if the a key is peing pressed down
var right = false;//variable to detect if the d key is peing pressed down
var stage = undefined;
function nextStage(stageNum) {
    stage = new Stages(stageNum);
}
nextStage(1);
var player = new Player(stage.playerSpawn.x, stage.playerSpawn.y, 100, 1, 3);


while (gameState == true) {
  //game run
}

//listen to see if a key has been pressed. If yes, run fuction
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

//If the key is pressed down, set the movment direction corredponding to the key to true
function keyDownHandler(e) {
  if (e.key == "w") {
    up = true;
  }
  if (e.key == "s") {
    down = true;
  }
  if (e.key == "a") {
    left = true;
  }
  if (e.key == "d") {
    right = true;
  }
}

//If the key is released,  set the movment direction corredponding to the key to false
function keyUpHandler(e) {
  if (e.key == "w") {
    up = false;
  }
  if (e.key == "s") {
    down = false;
  }
  if (e.key == "a") {
    left = false;
  }
  if (e.key == "d") {
    right = false;
  }
}

//@function placementHandeler() : handels placement
function placementHandeler() {
    //code
    //calls the placement funtions
}

//@function fileHandeler() : handelers all files and folders
//essentially makes the game run
//-collision
//-movement
//-updating
function fileHandeler() {
  //code
  //make new enemies, removes the ones that die, places player, updade for movment and collision of player, and refresh
  //Tells stage handler what stage to use
  ctx.clearRect(0, 0, c.width, c.height);
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
setInterval(fileHandeler, 20);
