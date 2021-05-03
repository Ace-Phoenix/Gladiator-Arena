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
        this.shop = this.shopLayout(stage);
    }
    
    shopLayout(stage){
        var retObj = {border:{},imgLocs:[],buttonLoc:[]}
        var defaultX = 90;
        var defaultY = 85;
        var defaultH = 185;
        var defaultW = 135;
        if (stage == 2) {
            retObj.border = {x:50,y:50,width:700,height:700};
            retObj.imgLocs.push({x:defaultX,y:defaultY,width:defaultW,height:defaultH,tag:"topLeft",color:"red",item:armor[1]});
            retObj.imgLocs.push({x:(defaultX+defaultW+25),y:defaultY,width:defaultW,height:defaultH,tag:"topMidLeft",color:"blue",item:armor[0]});
            retObj.imgLocs.push({x:(((defaultX+(defaultW*2)))+(25*2)),y:defaultY,width:defaultW,height:defaultH,tag:"topMidRight",color:"red",item:armor[3]});
            retObj.imgLocs.push({x:(((defaultX+(defaultW*3)))+(25*3)),y:defaultY,width:defaultW,height:defaultH, tag:"topRight",color:"blue", item:armor[2]});
            retObj.imgLocs.push({x:(((defaultX+(defaultW*.5)))+(25*.5)),y:(defaultY+defaultH+25),width:defaultW,height:defaultH,tag:"bottomLeft",color:"green", item:weapon[0]});
            retObj.imgLocs.push({x:(((defaultX+(defaultW*1.5)))+(25*1.5)),y:(defaultY+defaultH+25),width:defaultW,height:defaultH,tag:"bottomMid",color:"black",item:weapon[6]});
            retObj.imgLocs.push({x:(((defaultX+(defaultW*2.5)))+(25*2.5)),y:(defaultY+defaultH+25),width:defaultW,height:defaultH,tag:"bottomRight",color:"cyan",item:weapon[12]});
            retObj.buttonLoc.push({x:(350-95),y:550,width:95,height:55,type:"buy"});
            retObj.buttonLoc.push({x:(350+95),y:550,width:95,height:55,type:"cancel"});
        }if (stage == 4) {
            retObj.border = {x:50,y:50,width:700,height:700};
            retObj.imgLocs.push({x:defaultX,y:defaultY,width:defaultW,height:defaultH,tag:"topLeft"});
            retObj.imgLocs.push({x:(defaultX+defaultW+25),y:defaultY,width:defaultW,height:defaultH,tag:"topMidLeft"});
            retObj.imgLocs.push({x:(((defaultX+(defaultW*2)))+(25*2)),y:defaultY,width:defaultW,height:defaultH,tag:"topMidRight"});
            retObj.imgLocs.push({x:(((defaultX+(defaultW*3)))+(25*3)),y:defaultY,width:defaultW,height:defaultH, tag:"topRight"});
            retObj.imgLocs.push({x:(((defaultX+(defaultW*.5)))+(25*.5)),y:(defaultY+defaultH+25),width:defaultW,height:defaultH,tag:"bottomLeft"});
            retObj.imgLocs.push({x:(((defaultX+(defaultW*1.5)))+(25*1.5)),y:(defaultY+defaultH+25),width:defaultW,height:defaultH,tag:"bottomMid"});
            retObj.imgLocs.push({x:(((defaultX+(defaultW*2.5)))+(25*2.5)),y:(defaultY+defaultH+25),width:defaultW,height:defaultH,tag:"bottomRight"});
            retObj.buttonLoc.push({x:(350-95),y:550,width:95,height:55,type:"buy"});
            retObj.buttonLoc.push({x:(350+95),y:550,width:95,height:55,type:"cancel"});
        }if (stage == 6) {
            retObj.border = {x:50,y:50,width:700,height:700};
            retObj.imgLocs.push({x:defaultX,y:defaultY,width:defaultW,height:defaultH,tag:"topLeft"});
            retObj.imgLocs.push({x:(defaultX+defaultW+25),y:defaultY,width:defaultW,height:defaultH,tag:"topMidLeft"});
            retObj.imgLocs.push({x:(((defaultX+(defaultW*2)))+(25*2)),y:defaultY,width:defaultW,height:defaultH,tag:"topMidRight"});
            retObj.imgLocs.push({x:(((defaultX+(defaultW*3)))+(25*3)),y:defaultY,width:defaultW,height:defaultH, tag:"topRight"});
            retObj.imgLocs.push({x:(((defaultX+(defaultW*.5)))+(25*.5)),y:(defaultY+defaultH+25),width:defaultW,height:defaultH,tag:"bottomLeft"});
            retObj.imgLocs.push({x:(((defaultX+(defaultW*1.5)))+(25*1.5)),y:(defaultY+defaultH+25),width:defaultW,height:defaultH,tag:"bottomMid"});
            retObj.imgLocs.push({x:(((defaultX+(defaultW*2.5)))+(25*2.5)),y:(defaultY+defaultH+25),width:defaultW,height:defaultH,tag:"bottomRight"});
            retObj.buttonLoc.push({x:(350-95),y:550,width:95,height:55,type:"buy"});
            retObj.buttonLoc.push({x:(350+95),y:550,width:95,height:55,type:"cancel"});
        }if (stage == 8) {
            retObj.border = {x:50,y:50,width:700,height:700};
            retObj.imgLocs.push({x:defaultX,y:defaultY,width:defaultW,height:defaultH,tag:"topLeft"});
            retObj.imgLocs.push({x:(defaultX+defaultW+25),y:defaultY,width:defaultW,height:defaultH,tag:"topMidLeft"});
            retObj.imgLocs.push({x:(((defaultX+(defaultW*2)))+(25*2)),y:defaultY,width:defaultW,height:defaultH,tag:"topMidRight"});
            retObj.imgLocs.push({x:(((defaultX+(defaultW*3)))+(25*3)),y:defaultY,width:defaultW,height:defaultH, tag:"topRight"});
            retObj.imgLocs.push({x:(((defaultX+(defaultW*.5)))+(25*.5)),y:(defaultY+defaultH+25),width:defaultW,height:defaultH,tag:"bottomLeft"});
            retObj.imgLocs.push({x:(((defaultX+(defaultW*1.5)))+(25*1.5)),y:(defaultY+defaultH+25),width:defaultW,height:defaultH,tag:"bottomMid"});
            retObj.imgLocs.push({x:(((defaultX+(defaultW*2.5)))+(25*2.5)),y:(defaultY+defaultH+25),width:defaultW,height:defaultH,tag:"bottomRight"});
            retObj.buttonLoc.push({x:(350-95),y:550,width:95,height:55,type:"buy"});
            retObj.buttonLoc.push({x:(350+95),y:550,width:95,height:55,type:"cancel"});
        }if (stage == 10) {
            retObj.border = {x:50,y:50,width:700,height:700};
            retObj.imgLocs.push({x:defaultX,y:defaultY,width:defaultW,height:defaultH,tag:"topLeft"});
            retObj.imgLocs.push({x:(defaultX+defaultW+25),y:defaultY,width:defaultW,height:defaultH,tag:"topMidLeft"});
            retObj.imgLocs.push({x:(((defaultX+(defaultW*2)))+(25*2)),y:defaultY,width:defaultW,height:defaultH,tag:"topMidRight"});
            retObj.imgLocs.push({x:(((defaultX+(defaultW*3)))+(25*3)),y:defaultY,width:defaultW,height:defaultH, tag:"topRight"});
            retObj.imgLocs.push({x:(((defaultX+(defaultW*.5)))+(25*.5)),y:(defaultY+defaultH+25),width:defaultW,height:defaultH,tag:"bottomLeft"});
            retObj.imgLocs.push({x:(((defaultX+(defaultW*1.5)))+(25*1.5)),y:(defaultY+defaultH+25),width:defaultW,height:defaultH,tag:"bottomMid"});
            retObj.imgLocs.push({x:(((defaultX+(defaultW*2.5)))+(25*2.5)),y:(defaultY+defaultH+25),width:defaultW,height:defaultH,tag:"bottomRight"});
            retObj.buttonLoc.push({x:(350-95),y:550,width:95,height:55,type:"buy"});
            retObj.buttonLoc.push({x:(350+95),y:550,width:95,height:55,type:"cancel"});
        }
        return retObj;
    }
    
    numberOfSets(stage){
        if (stage == 1) {
            return 2;
        }
        if (stage == 3) {
            return 3;
        }
        if (stage == 5) {
            return 2;
        }
        if (stage == 7) {
            return 2;
        }
        if (stage == 9) {
            return 1;
        }
        if (stage == 11) {
            return 10;
        }
    }
    
    //@class_function objectsPush() : takes the default for the stage and pushes it to this.objects
    //@param stage [integer] {restricted : 0 < stage <= 7 : Whole Numbers} : the stage number
    objectsPush(stage){
        var retObject = {locations:[],amount:undefined};
        if (stage == 1) {
            retObject.locations.push({x:70,y:110});
            retObject.locations.push({x:250,y:200});
            retObject.locations.push({x:200,y:620});
            retObject.locations.push({x:400,y:150});
            retObject.locations.push({x:380,y:350});
            retObject.locations.push({x:550,y:190});
            retObject.locations.push({x:460,y:600});
            retObject.locations.push({x:680,y:260});
        }
        if (stage == 3) {
            retObject.locations.push({x:65*2,y:85*2});
            retObject.locations.push({x:125*2,y:290*2});
            retObject.locations.push({x:290*2,y:120*2});
        }
        if (stage == 5) {
            retObject.locations.push({x:65*2,y:75*2});
            retObject.locations.push({x:150*2,y:310*2});
        }
        if (stage == 7) {
            retObject.locations.push({x:110*2,y:125*2});
        }
        if (stage == 9) {
        }
        if (stage == 11) {
        }
        retObject.amount = retObject.locations.length;
        return retObject;
    }
    //@class_function playerPush() : pushes what will be player spawn for the stage
    //@param stage [integer] {restricted : 0 < stage <= 7 : Whole Numbers} : the stage number
    playerPush(stage){
        var retPlayer = {x:undefined,y:undefined};
        if (stage == 1) {
            retPlayer = {x:390*2,y:200*2};            
        }
        if (stage == 3) {
            retPlayer = {x:270*2,y:289*2}; 
        }
        if (stage == 5) {
            retPlayer = {x:210*2,y:110*2}; 
        }
        if (stage == 7) {
            retPlayer = {x:270*2,y:210*2}; 

        }
        if (stage == 9) {
            retPlayer = {x:380*2,y:200*2}; 

        }
        if (stage == 11) {
            retPlayer = {x:200*2,y:200*2}; 
        }
        return retPlayer;
    }
    //@class_function enemyPush() : pushes the enemy spawn locations to this.enemy
    //@param stage [integer] {restricted : 0 < stage <= 7 : Whole Numbers} : the stage number
    enemyPush(stage){
        var retEnemy = [];
        if (stage == 1) {
            retEnemy.push({type:"Peasant", x:(35*2), y:(35*2),hp:50,dam:5,aT:0,aS:1});
            retEnemy.push({type:"Peasant", x:(125*2), y:(35*2),hp:50,dam:5,aT:0,aS:1});
            retEnemy.push({type:"Peasant", x:(250*2), y:(35*2),hp:50,dam:5,aT:0,aS:1});
            retEnemy.push({type:"Peasant", x:(365*2), y:(35*2),hp:50,dam:5,aT:0,aS:1});
            retEnemy.push({type:"Peasant", x:(35*2), y:(200*2),hp:50,dam:5,aT:0,aS:1});
            retEnemy.push({type:"Peasant", x:(35*2), y:(365*2),hp:50,dam:5,aT:0,aS:1});
            retEnemy.push({type:"Peasant", x:(125*2), y:(365*2),hp:50,dam:5,aT:0,aS:1});
            retEnemy.push({type:"Peasant", x:(250*2), y:(365*2),hp:50,dam:5,aT:0,aS:1});
            retEnemy.push({type:"Peasant", x:(365*2), y:(365*2),hp:50,dam:5,aT:0,aS:1});
        }
        if (stage == 3) {
            retEnemy.push({type:"Gladiator", x:35*2, y:35*2,hp:100,dam:10,aT:0,aS:2});
            retEnemy.push({type:"Peasant", x:125*2, y:35*2,hp:50,dam:5,aT:0,aS:1});
            retEnemy.push({type:"Gladiator", x:250*2, y:35*2,hp:100,dam:10,aT:0,aS:2});
            retEnemy.push({type:"Peasant", x:365*2, y:35*2,hp:50,dam:5,aT:0,aS:1});
            retEnemy.push({type:"Gladiator", x:35*2, y:200*2,hp:100,dam:10,aT:0,aS:2});
            retEnemy.push({type:"Peasant", x:35*2, y:365*2,hp:50,dam:5,aT:0,aS:1});
            retEnemy.push({type:"Peasant", x:125*2, y:365*2,hp:50,dam:5,aT:0,aS:1});
            retEnemy.push({type:"Gladiator", x:250*2, y:365*2,hp:100,dam:10,aT:0,aS:2});
            retEnemy.push({type:"Peasant", x:365*2, y:365*2,hp:50,dam:5,aT:0,aS:1});
            retEnemy.push({type:"Gladiator", x:365*2, y:200*2,hp:100,dam:10,aT:0,aS:2});
        }
        if (stage == 5) {
            retEnemy.push({type:"Gladiator", x:35*2, y:35*2,hp:100,dam:10,aT:0,aS:2});
            retEnemy.push({type:"Peasant", x:125*2, y:35*2,hp:50,dam:5,aT:0,aS:1});
            retEnemy.push({type:"Gladiator", x:250*2, y:35*2,hp:100,dam:10,aT:0,aS:2});
            retEnemy.push({type:"Tiger", x:365*2, y:35*2,hp:75,dam:5,aT:0,aS:0.5});
            retEnemy.push({type:"Gladiator", x:35*2, y:200*2,hp:100,dam:10,aT:0,aS:2});
            retEnemy.push({type:"Tiger", x:35*2, y:365*2,hp:75,dam:5,aT:0,aS:0.5});
            retEnemy.push({type:"Gladiator", x:125*2, y:365*2,hp:100,dam:10,aT:0,aS:2});
            retEnemy.push({type:"Tiger", x:250*2, y:365*2,hp:75,dam:5,aT:0,aS:0.5});
            retEnemy.push({type:"Peasant", x:365*2, y:365*2,hp:50,dam:5,aT:0,aS:1});
            retEnemy.push({type:"Gladiator", x:365*2, y:200*2,hp:100,dam:10,aT:0,aS:2});
        }
        if (stage == 7) {
            retEnemy.push({type:"Tiger", x:35*2, y:35*2,hp:75,dam:5,aT:0,aS:0.5});
            retEnemy.push({type:"Tiger", x:125*2, y:35*2,hp:75,dam:5,aT:0,aS:0.5});
            retEnemy.push({type:"Tiger", x:250*2, y:35*2,hp:75,dam:5,aT:0,aS:0.5});
            retEnemy.push({type:"Tiger", x:365*2, y:35*2,hp:75,dam:5,aT:0,aS:0.5});
            retEnemy.push({type:"Tiger", x:35*2, y:200*2,hp:75,dam:5,aT:0,aS:0.5});
            retEnemy.push({type:"Gladiator", x:35*2, y:365*2,hp:100,dam:10,aT:0,aS:2});
            retEnemy.push({type:"Gladiator", x:125*2, y:365*2,hp:100,dam:10,aT:0,aS:2});
            retEnemy.push({type:"Tiger", x:250*2, y:365*2,hp:75,dam:5,aT:0,aS:0.5});
            retEnemy.push({type:"Gladiator", x:365*2, y:365*2,hp:100,dam:10,aT:0,aS:2});
            retEnemy.push({type:"Tiger", x:365*2, y:200*2,hp:75,dam:5,aT:0,aS:0.5});
        }
        if (stage == 9) {
            retEnemy.push({type:"Boss", x:35*2, y:200*2,hp:500,dam:100,aT:0,aS:2.5});
        }
        if (stage == 11) {
            retEnemy.push({type:"Peasant", x:35*2, y:35*2,hp:50,dam:5,aT:0,aS:1});
            retEnemy.push({type:"Peasant", x:125*2, y:35*2,hp:50,dam:5,aT:0,aS:1});
            retEnemy.push({type:"Peasant", x:250*2, y:35*2,hp:50,dam:5,aT:0,aS:1});
            retEnemy.push({type:"Peasant", x:365*2, y:35*2,hp:50,dam:5,aT:0,aS:1});
            retEnemy.push({type:"Peasant", x:35*2, y:200*2,hp:50,dam:5,aT:0,aS:1});
            retEnemy.push({type:"Peasant", x:35*2, y:365*2,hp:50,dam:5,aT:0,aS:1});
            retEnemy.push({type:"Peasant", x:125*2, y:365*2,hp:50,dam:5,aT:0,aS:1});
            retEnemy.push({type:"Peasant", x:250*2, y:365*2,hp:50,dam:5,aT:0,aS:1});
            retEnemy.push({type:"Peasant", x:365*2, y:365*2,hp:50,dam:5,aT:0,aS:1});
            retEnemy.push({type:"Peasant", x:365*2, y:200*2,hp:50,dam:5,aT:0,aS:1});
        }
        return retEnemy;
    }
}

