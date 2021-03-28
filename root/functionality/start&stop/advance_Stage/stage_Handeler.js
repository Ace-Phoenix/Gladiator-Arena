//@function setLocations() : Ceneral draw function that draws everything were it is supposed to be
//@param player [class:Object] {restricted:Must come from player_Class.js class player} : just player things 
function setLocations(player) {
     for (var i = 0; i < stage.enemy.length;i++) {
     placeNpc(stage.enemy[i]);//place NPC
     }
     for (var k = 0; k < enemies.length;k++) {
     placeNpc(enemies[k].pos,"enemy");//place NPC
     }
     for (var j = 0; j < stage.objects.amount;j++) {
        placeObjects(stage.objects.locations[j]);//Place Objects
     }
     placeObjects({x:(stage.playerSpawn.x-15),y:(stage.playerSpawn.y-15)},"green");//Place player spawn
     drawPlayer(player);//Place Player
}
