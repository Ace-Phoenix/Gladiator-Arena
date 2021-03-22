var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
//Functions that tell the game to update and also to start or end game theoretically this will be
//done last and used as a test until everything else is done
var gameState = false;
var up = false;//variable to detect if the w key is peing pressed down
var down = false;//variable to detect if the s key is peing pressed down
var left = false;//variable to detect if the a key is peing pressed down
var right = false;//variable to detect if the d key is peing pressed down

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
  drawPlayer();
  placeNPC();
  placeObjects();
  if(right == true) {
    player.xPos += 3;
    /* this is to prevent the player from running off the map. Its in a comment because I don't know the width of the player
    if (player.dx + paddleWidth > canvas.width){
      paddleX = canvas.width - paddleWidth;
    }
    */
  }
  else if(left == true) {
    player.xPos -= 3;
    if (player.xPos < 0){
      player.xPos = 0;
    }
  }
  if (down == true) {
    player.yPos += 3;
    /* this is to prevent the player from running off the map. Its in a comment because I don't know the width of the player
    if (player.xPos + player width > canvas.width){
      player.xPox = canvas.width - player width;
    }
    */
  }
  else if (up == true) {
    player.yPos -= 3;
    if (player.yPos < 0) {
      player.yPos = 0;
    }
  }
  if (ball.x + dx > c.width - ball.ballSize || ball.x + dx < ball.ballSize) { //If the circle's x position exceeds the width of the canvas...
    dx = -dx; //The ball's x direction will be flipped, and it will bounce a specific distance (damping).
  }
  if(ball.y + dy > c.height - ball.ballSize || ball.y + dy < ball.ballSize) { //If the circle's y position exceeds the height of the canvas...
    dy = -dy * damping; //Its y direction will be flipped, and it's speed will decrease.
  }
  if (((ball.y + dy) + ball.ballSize) <= c.height) {//prevents the ball from falling off the canvas
    ball.y += dy;
  }
}
