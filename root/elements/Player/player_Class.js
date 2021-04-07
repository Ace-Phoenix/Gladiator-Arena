//Player class for making the player
//-start location (pos)
//-Health (hp)
//-Damage (dam)
//-Lives? (lives)
//@class player : basic so far makeing for the player
////@Constructor
////@param xPos && yPos [integer] {restricted: 0 < # < canavas.width/hight} : Coords of player
////@param hp [object] {retsricted : Must follow {current:#,total:#}} : Health of the player
////@param dam [object] {restricted : Must follow {min: #, max:#}}:min and max damage the player can do
////@param lives [integer] {retsricted : 0 < lives < Too Many} : amount of live the player has 
class Player {
  constructor(xPos, yPos, hp, dam, lives,attackTimer,attackSpeed) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.equiped = {helmet:undefined,chestplate:undefined,weapon:undefined,shield:undefined};
    this.effects = this.effectsAdd(this.equiped); 
    this.hp = hp;
    this.dam = dam;
    this.lives = lives;
    this.attackTimer = attackTimer;
    this.attackSpeed = attackSpeed;
  }
  effectsAdd(equiped){
    var previousEffects = this.effects;
                  console.log(previousEffects)
    if (equiped.helmet !== undefined || equiped.chestplate !== undefined) {
        //code
    if (equiped.helmet !== undefined ) {
      var firstEffect = equiped.helmet.spec;
        firstEffect = firstEffect.split(":");
    }if (equiped.chestplate !== undefined) {
       var secondEffect = equiped.chestplate.spec;
        secondEffect = secondEffect.split(":");
              console.log(secondEffect)
}
        if (equiped.helmet !== undefined && equiped.chestplate !== undefined) {
    var effect = [{location:"Helmet",name:firstEffect[0],percentage:(parseFloat(firstEffect[1])/100)},{location:"Chestplate",name:secondEffect[0],percentage:(parseFloat(secondEffect[1])/100)}];
        }else if (equiped.helmet !== undefined ) {
          console.log(firstEffect)
    var effect = [{location:"Helmet",name:firstEffect[0],percentage:(parseFloat(firstEffect[1])/100)}];
        }else if (equiped.chestplate !== undefined) {
          console.log(secondEffect)
    var effect = [{location:"Chestplate",name:secondEffect[0],percentage:(parseFloat(secondEffect[1])/100)}];
        }
    }
    return this.effects = effect;
  }
  equipItem(item){
    if (item.type == "Helmet") {
        this.equiped.helmet = item;
        
    }
    if (item.type == "Chestplate") {
      this.equiped.chestplate = item;
      
    }
    if (item.type == "Sword") {
      this.equiped.weapon = item;

    }
    if (item.type == "Shield") {
      this.equiped.shield = item;

    }
    this.effectsAdd(this.equiped);
  }
  unequipItem(slot){
    if (slot == "Helmet") {
        this.equiped.helmet = undefined;
          this.effectsAdd(this.equiped);
  
    }
    if (slot == "Chestplate") {
      this.equiped.chestplate = undefined;
          this.effectsAdd(this.equiped);

    }
    if (slot == "Sword") {
      this.equiped.weapon = undefined;
    }
    if (slot == "Shield") {
      this.equiped.shield = undefined;
    }
  }
}
