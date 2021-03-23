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

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

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
  if(right == true) {
    player.xPos += 1;
    //this is to prevent the player from running off the map. Its in a comment because I don't know the width of the player
    if (player.xPos + 10 > c.width){
      player.xPos = c.width - 10;
    }
  }
  else if(left == true) {
    player.xPos -= 1;
    if (player.xPos-10 < 0){
      player.xPos = 10;
    }
  }
  if (down == true) {
    player.yPos += 1;
    // this is to prevent the player from running off the map. Its in a comment because I don't know the width of the player
    if (player.yPos + 10 > c.width){
      player.yPos = c.width - 10;
    }
  }
  else if (up == true) {
    player.yPos -= 1;
    if (player.yPos-10 < 0) {
      player.yPos = 10;
    }
  }
  for (var i = 0; i < stage.objects.amount; i++) {
    if ((player.xPos >= stage.objects.locations[i].x && player.xPos <= stage.objects.locations[i].x + 30) || (player.xPos + 10 >= stage.objects.locations[i].x && player.xPos + 10 <= stage.objects.locations[i].x + 30) || (player.xPos - 10 >= stage.objects.locations[i].x && player.xPos - 10 <= stage.objects.locations[i].x + 30)) {
      if ((player.yPos >= stage.objects.locations[i].y && player.yPos <= stage.objects.locations[i].y + 30) || (player.yPos - 10 >= stage.objects.locations[i].y && player.yPos - 10 <= stage.objects.locations[i].y + 30) || (player.yPos + 10 >= stage.objects.locations[i].y && player.yPos + 10 <= stage.objects.locations[i].y + 30)) {
        if(right == true) {
          player.xPos -= 1;
        }
        else if(left == true) {
          player.xPos += 1;
        }
        if (down == true) {
          player.yPos -= 1;
        }
        else if (up == true) {
          player.yPos += 1;
        }
      }
    }
  }
}
setInterval(fileHandeler, 20);
