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
var player = new Player(200, 200, 100, 1, 3);


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
    player.xPos += 7;
    //this is to prevent the player from running off the map. Its in a comment because I don't know the width of the player
    if (player.xPos + 10 > c.width){
      player.xPos = c.width - 10;
    }
  }
  else if(left == true) {
    player.xPos -= 7;
    if (player.xPos < 0){
      player.xPos = 0;
    }
  }
  if (down == true) {
    player.yPos += 7;
    // this is to prevent the player from running off the map. Its in a comment because I don't know the width of the player
    if (player.xPos + 10 > c.width){
      player.xPox = c.width - 10;
    }
  }
  else if (up == true) {
    player.yPos -= 7;
    if (player.yPos < 0) {
      player.yPos = 0;
    }
  }
  if (player.xPos + dx > c.width - 10 || player.xPos + dx < 10) { //If the circle's x position exceeds the width of the canvas...
    player.xPos = player.xPos; //The ball's x direction will be flipped, and it will bounce a specific distance (damping).
  }
  if(player.yPos + dy > c.height - 10 || player.yPos + dy < 10) { //If the circle's y position exceeds the height of the canvas...
    player.yPos = player.yPos; //Its y direction will be flipped, and it's speed will decrease.
  }
  if (((ball.y + dy) + ball.ballSize) <= c.height) {//prevents the ball from falling off the canvas
    ball.y += dy;
  }
}
setInterval(fileHandeler,100);
