var player = new Player(200, 200, 100, 1, 3);

function setLocations(stage,player) {
    var stage = new Stages(stage);
    console.log(stage)
     for (var i = 0; i < stage.enemy.length;i++) {
     placeNpc(stage.enemy[i]);
     }
     for (var j = 0; j < stage.objects.amount;j++) {
        placeObjects(stage.objects.locations[j]);
     }
     drawPlayer(player);
}
