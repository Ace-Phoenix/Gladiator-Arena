
function setLocations(player) {
    console.log(stage);
     for (var i = 0; i < stage.enemy.length;i++) {
     placeNpc(stage.enemy[i]);
     }
     for (var j = 0; j < stage.objects.amount;j++) {
        placeObjects(stage.objects.locations[j]);
     }
     drawPlayer(player);
}
