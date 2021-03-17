function stage()
 {
  loadScreen();
 }
 function loadScreen()
 {
   background = new createjs.Shape();
    background.graphics
    background.x = 0;
    background.y = 0;
    stage.addChild(background);
