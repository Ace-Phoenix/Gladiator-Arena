//This determines where things should be placed depending on the stage it will be most likelu classes
//Memphis - I can do this myself because what im about to type may make no sence to anyone but me

//@class Stages [class] : Layouts for stage one
////@constructor
////@param obsticles [array] {restricted:[objects] within [array]} : The location of the cover
////@param playerSpawn [object] {absolute : No random spawn location} : Location at which the player will spawn
////@param enemySpawns [array] {restricted : [objects] within [array]} : The Location of enemy spawns
////@param enemyTypes [array] {restricted : [obect] within [arrays]} : types of enemies allowed to spawn

class Stages{
    constructor(stage){
        this.stage = stage;
        this.objects = objectsPush(stage);
        this.enemy = enemyPush(stage);
        this.playerSpawn = playerPush(stage);
    }
    objectsPush(stage){
        var retObject = {locations:[],amount:undefined};
        if (stage == 1) {
            retObject.locations += {x:35,y:55};
            retObject.locations += {x:125,y:100};
            retObject.locations += {x:100,y:350};
            retObject.locations += {x:200,y:75};
            retObject.locations += {x:190,y:175};
            retObject.locations += {x:250,y:95};
            retObject.locations += {x:230,y:300};
            retObject.locations += {x:360,y:160};
        }
        if (stage == 2) {
            retObject.locations += {x:35,y:55};
            retObject.locations += {x:125,y:100};
            retObject.locations += {x:100,y:350};
            retObject.locations += {x:200,y:75};
            retObject.locations += {x:190,y:175};
            retObject.locations += {x:250,y:95};
            retObject.locations += {x:230,y:300};
            retObject.locations += {x:360,y:160};
        }
        if (stage == 3) {
            retObject.locations += {x:35,y:55};
            retObject.locations += {x:125,y:100};
            retObject.locations += {x:100,y:350};
            retObject.locations += {x:200,y:75};
            retObject.locations += {x:190,y:175};
            retObject.locations += {x:250,y:95};
            retObject.locations += {x:230,y:300};
            retObject.locations += {x:360,y:160};
        }
        if (stage == 4) {
            retObject.locations += {x:35,y:55};
            retObject.locations += {x:125,y:100};
            retObject.locations += {x:100,y:350};
            retObject.locations += {x:200,y:75};
            retObject.locations += {x:190,y:175};
            retObject.locations += {x:250,y:95};
            retObject.locations += {x:230,y:300};
            retObject.locations += {x:360,y:160};
        }
        if (stage == 5) {
            retObject.locations += {x:35,y:55};
            retObject.locations += {x:125,y:100};
            retObject.locations += {x:100,y:350};
            retObject.locations += {x:200,y:75};
            retObject.locations += {x:190,y:175};
            retObject.locations += {x:250,y:95};
            retObject.locations += {x:230,y:300};
            retObject.locations += {x:360,y:160};
        }
        if (stage == 6) {
            retObject.locations += {x:35,y:55};
            retObject.locations += {x:125,y:100};
            retObject.locations += {x:100,y:350};
            retObject.locations += {x:200,y:75};
            retObject.locations += {x:190,y:175};
            retObject.locations += {x:250,y:95};
            retObject.locations += {x:230,y:300};
            retObject.locations += {x:360,y:160};
        }
        return retObject;
    }
    playerPush(stage){
        var retPlayer = {x:undefined,y:undefined};
        if (stage == 1) {
            retObject.locations += {x:380,y:180};            
        }
        if (stage == 2) {
            
        }
        if (stage == 3) {
            
        }
        if (stage == 4) {
            
        }
        if (stage == 5) {
            
        }
        if (stage == 6) {
            
        }
        return playerSpawn;
    }
    enemyPush(stage){
        var retEnemy = [];
        if (stage == 1) {
            retEnemy += {type:"peasant", x:35, y:35};
            retEnemy += {type:"peasant", x:125, y:35};
            retEnemy += {type:"peasant", x:250, y:35};
            retEnemy += {type:"peasant", x:365, y:35};
            retEnemy += {type:"peasant", x:35, y:200};
            retEnemy += {type:"peasant", x:35, y:365};
            retEnemy += {type:"peasant", x:125, y:365};
            retEnemy += {type:"peasant", x:250, y:365};
            retEnemy += {type:"peasant", x:365, y:365};
        }
        if (stage == 2) {
            retEnemy += {type:"peasant", x:35, y:35};
            
        }
        if (stage == 3) {
            
        }
        if (stage == 4) {
            
        }
        if (stage == 5) {
            
        }
        if (stage == 6) {
            
        }
        return retEnemy;
    }
}

