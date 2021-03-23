
function setLocations(player) {
     for (var i = 0; i < stage.enemy.length;i++) {
     placeNpc(stage.enemy[i]);
     }
     for (var j = 0; j < stage.objects.amount;j++) {
        placeObjects(stage.objects.locations[j]);
     }
     placeObjects({x:370,y:185},"green");
     drawPlayer(player);
}
