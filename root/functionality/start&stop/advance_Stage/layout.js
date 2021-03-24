//This determines where things should be placed depending on the stage it will be most likelu classes
//Memphis - I can do this myself because what im about to type may make no sence to anyone but me

//@class Stages [class] : Layouts for stage one
////@constructor
////@param stage [integer] {restricted : 0 < stage <= 7 : Whole Numbers} : Current stage number
////@return obsticles [array] {restricted:[objects] within [array]} : The location of the cover
////@return playerSpawn [object] {absolute : No random spawn location} : Location at which the player will spawn
////@return enemySpawns [array] {restricted : [objects] within [array]} : The Location of enemy spawns
////@return enemyTypes [array] {restricted : [obect] within [arrays]} : types of enemies allowed to spawn

class Stages{
    constructor(stage){
        this.stage = stage;//stage number
        this.objects = this.objectsPush(stage);//objects well object
        this.enemy = this.enemyPush(stage);//enemy is actually enemies but its ok
        this.playerSpawn = this.playerPush(stage);//player default spawn varies for each stage
    }
    
    //@class_function objectsPush() : takes the default for the stage and pushes it to this.objects
    //@param stage [integer] {restricted : 0 < stage <= 7 : Whole Numbers} : the stage number
    objectsPush(stage){
        var retObject = {locations:[],amount:undefined};
        if (stage == 1) {
            retObject.locations.push({x:35,y:55});
            retObject.locations.push({x:125,y:100});
            retObject.locations.push({x:100,y:310});
            retObject.locations.push({x:200,y:75});
            retObject.locations.push({x:190,y:175});
            retObject.locations.push({x:250,y:95});
            retObject.locations.push({x:230,y:300});
            retObject.locations.push({x:360,y:130});
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
        retObject.amount = retObject.locations.length;
        return retObject;
    }
    //@class_function playerPush() : pushes what will be player spawn for the stage
    //@param stage [integer] {restricted : 0 < stage <= 7 : Whole Numbers} : the stage number
    playerPush(stage){
        var retPlayer = {x:undefined,y:undefined};
        if (stage == 1) {
            retPlayer = {x:390,y:200};            
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
        return retPlayer;
    }
    //@class_function enemyPush() : pushes the enemy spawn locations to this.enemy
    //@param stage [integer] {restricted : 0 < stage <= 7 : Whole Numbers} : the stage number
    enemyPush(stage){
        var retEnemy = [];
        if (stage == 1) {
            retEnemy.push({type:"Peasant", x:35, y:35});
            retEnemy.push({type:"Peasant", x:125, y:35});
            retEnemy.push({type:"Peasant", x:250, y:35});
            retEnemy.push({type:"Peasant", x:365, y:35});
            retEnemy.push({type:"Peasant", x:35, y:200});
            retEnemy.push({type:"Peasant", x:35, y:365});
            retEnemy.push({type:"Peasant", x:125, y:365});
            retEnemy.push({type:"Peasant", x:250, y:365});
            retEnemy.push({type:"Peasant", x:365, y:365});
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

