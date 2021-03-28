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
        this.sets = this.numberOfSets(stage);//player default spawn varies for each stage
    }
    
    numberOfSets(stage){
        if (stage == 1) {
            return 2;
        }
        if (stage == 2) {
            return 3;
        }
        if (stage == 3) {
            return 2;
        }
        if (stage == 4) {
            return 2;
        }
        if (stage == 5) {
            return 1;
        }
        if (stage == 6) {
            return 10;
        }
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
            retObject.locations.push({x:275,y:95});
            retObject.locations.push({x:230,y:300});
            retObject.locations.push({x:340,y:130});
        }
        if (stage == 2) {
            retObject.locations.push({x:65,y:85});
            retObject.locations.push({x:125,y:290});
            retObject.locations.push({x:290,y:120});
        }
        if (stage == 3) {
            retObject.locations.push({x:65,y:75});
            retObject.locations.push({x:150,y:310});
        }
        if (stage == 4) {
            retObject.locations.push({x:110,y:125});
        }
        if (stage == 5) {
        }
        if (stage == 6) {
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
            retPlayer = {x:270,y:289}; 
        }
        if (stage == 3) {
            retPlayer = {x:210,y:110}; 
        }
        if (stage == 4) {
            retPlayer = {x:270,y:210}; 

        }
        if (stage == 5) {
            retPlayer = {x:380,y:200}; 

        }
        if (stage == 6) {
            retPlayer = {x:200,y:200}; 
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
            retEnemy.push({type:"Gladiator", x:35, y:35});
            retEnemy.push({type:"Peasant", x:125, y:35});
            retEnemy.push({type:"Gladiator", x:250, y:35});
            retEnemy.push({type:"Peasant", x:365, y:35});
            retEnemy.push({type:"Gladiator", x:35, y:200});
            retEnemy.push({type:"Peasant", x:35, y:365});
            retEnemy.push({type:"Peasant", x:125, y:365});
            retEnemy.push({type:"Gladiator", x:250, y:365});
            retEnemy.push({type:"Peasant", x:365, y:365});
            retEnemy.push({type:"Gladiator", x:365, y:200});
        }
        if (stage == 3) {
            retEnemy.push({type:"Gladiator", x:35, y:35});
            retEnemy.push({type:"Peasant", x:125, y:35});
            retEnemy.push({type:"Gladiator", x:250, y:35});
            retEnemy.push({type:"Tiger", x:365, y:35});
            retEnemy.push({type:"Gladiator", x:35, y:200});
            retEnemy.push({type:"Tiger", x:35, y:365});
            retEnemy.push({type:"Gladiator", x:125, y:365});
            retEnemy.push({type:"Tiger", x:250, y:365});
            retEnemy.push({type:"Peasant", x:365, y:365});
            retEnemy.push({type:"Gladiator", x:365, y:200});
        }
        if (stage == 4) {
            retEnemy.push({type:"Tiger", x:35, y:35});
            retEnemy.push({type:"Tiger", x:125, y:35});
            retEnemy.push({type:"Tiger", x:250, y:35});
            retEnemy.push({type:"Tiger", x:365, y:35});
            retEnemy.push({type:"Tiger", x:35, y:200});
            retEnemy.push({type:"Gladiator", x:35, y:365});
            retEnemy.push({type:"Gladiator", x:125, y:365});
            retEnemy.push({type:"Tiger", x:250, y:365});
            retEnemy.push({type:"Gladiator", x:365, y:365});
            retEnemy.push({type:"Tiger", x:365, y:200});
        }
        if (stage == 5) {
            retEnemy.push({type:"Boss", x:35, y:200});
        }
        if (stage == 6) {
            retEnemy.push({type:"Peasant", x:35, y:35});
            retEnemy.push({type:"Peasant", x:125, y:35});
            retEnemy.push({type:"Peasant", x:250, y:35});
            retEnemy.push({type:"Peasant", x:365, y:35});
            retEnemy.push({type:"Peasant", x:35, y:200});
            retEnemy.push({type:"Peasant", x:35, y:365});
            retEnemy.push({type:"Peasant", x:125, y:365});
            retEnemy.push({type:"Peasant", x:250, y:365});
            retEnemy.push({type:"Peasant", x:365, y:365});
            retEnemy.push({type:"Peasant", x:365, y:200});
        }
        return retEnemy;
    }
}

