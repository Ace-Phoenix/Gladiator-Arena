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
var baseDamage = 10;
class Player {
  constructor(xPos, yPos, hp, dam, lives,attackTimer,attackSpeed) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.equiped = {helmet:undefined,chestplate:undefined,weapon:undefined,shield:undefined};
    this.items = {helmet:[],chestplate:[],weapon:[],shield:[]};
    this.effects = this.effectsAdd(this.equiped); 
    this.hp = hp;
    this._dam = dam;
    this.defDam = 10;
    this.lives = lives;
    this._armorRating = 0;
    this.attackDist = 70;//px
    this.aF = 0;
    this.gold = 0;
    this.attackTimer = attackTimer;
    this.attackSpeed = attackSpeed;
  }
  get dam(){
    return this._dam;
  }
  set dam(dam){
    var placeHolder = 0;
    if (this.equiped.weapon !== undefined) {
      placeHolder += this.equiped.weapon.dam;
    }if (this.equiped.shield !== undefined) {
      placeHolder += this.equiped.shield.dam;
    }
    placeHolder+=this.defDam;
    this._dam = placeHolder;
  }
  get armorRating(){
    return this._armorRating;
  }
  set armorRating(armorRating){
    var placeHolder = 0;
    if (this.equiped.chestplate !== undefined) {
      placeHolder += this.equiped.chestplate.damRest;
    }if (this.equiped.shield !== undefined) {
      placeHolder += this.equiped.shield.damRest;
    }if (this.equiped.helmet !== undefined) {
      placeHolder += this.equiped.helmet.damRest;
    }
    this._armorRating = placeHolder;
  }
  effectsAdd(equiped){
    var previousEffects = this.effects;
    if (equiped.helmet !== undefined || equiped.chestplate !== undefined) {
        //code
    if (equiped.helmet !== undefined ) {
      var firstEffect = equiped.helmet.spec;
        firstEffect = firstEffect.split(":");
    }if (equiped.chestplate !== undefined) {
       var secondEffect = equiped.chestplate.spec;
        secondEffect = secondEffect.split(":");
    }
        if (equiped.helmet !== undefined && equiped.chestplate !== undefined) {
          var effect = [{location:"Helmet",name:firstEffect[0],percentage:(parseFloat(firstEffect[1])/100)},{location:"Chestplate",name:secondEffect[0],percentage:(parseFloat(secondEffect[1])/100)}];
        }else if (equiped.helmet !== undefined ) {
           var effect = [{location:"Helmet",name:firstEffect[0],percentage:(parseFloat(firstEffect[1])/100)}];
        }else if (equiped.chestplate !== undefined) {
          var effect = [{location:"Chestplate",name:secondEffect[0],percentage:(parseFloat(secondEffect[1])/100)}];
        }
    }
    return this.effects = effect;
  }
  updateOrRemove(type){
    var boost = {aDb:0,aSb:0,dRb:0,hpB:0};
    if (this.effects!==undefined) {
        //code
    if (this.effects[0]!=="") {
      if (this.effects[0].name == "AttackDamage") {
        boost.aDb += this.effects[0].percentage;
      }
      if (this.effects[0].name == "HealthBoost") {
        boost.hpB += this.effects[0].percentage;
        }
      if (this.effects[0].name == "DamageRes") {
        boost.dRb += this.effects[0].percentage;
      }
      if (this.effects[0].name == "AttackSpeed") {
        boost.aSb += this.effects[0].percentage;
      }
    }
    if (this.effects[1]!==undefined) {
      if (this.effects[1].name == "AttackDamage") {
        boost.aDb += this.effects[1].percentage;
      }
      if (this.effects[1].name == "HealthBoost") {
        boost.hpB += this.effects[1].percentage;
                console.log(boost)
      }
      if (this.effects[1].name == "DamageRes") {
        boost.dRb += this.effects[1].percentage;
      }
      if (this.effects[1].name == "AttackSpeed") {
        boost.aSb += this.effects[1].percentage;
      }
    }
    }
    if (type=="update") {
      if (boost.aDb>0) {
        console.log(boost.aDb);
        console.log(this.dam);
        this.dam += (this.dam*boost.aDb);
        this.dam = Math.round(this.dam*10)/10;
      }
      if (boost.hpB>0) {
        this.hp += (this.hp*boost.hpB);
       this.hp = Math.round(this.hp);
      }
      if (boost.dRb>0) {
        this.armorRating += (this.armorRating*boost.dRb);
      }
      if (boost.aSb>0) {
        this.attackSpeed -= (this.attackSpeed*boost.aSb);
      }
    }
    if (type=="remove") {
      if (boost.aDb>0) {
        this.dam -= (this.dam*boost.aDb);
        this.dam = Math.round(this.dam);
      }
      if (boost.hpB>0) {
        this.hp = Math.round(this.hp);    
        this.hp = (this.hp/(boost.hpB+1));
        this.hp = Math.round(this.hp);    
      }
      if (boost.dRb>0) {
        this.armorRating -= (this.armorRating*boost.dRb);
      }
      if (boost.aSb>0) {
        this.attackSpeed += (this.attackSpeed*boost.aSb);
      }
    }
  }
  equipItem(item){
    var prevEffect = this.effects;
    var totalDam = 10;
    var totalArmor = 0;
    if (this.effects !== undefined) {
      this.updateOrRemove("remove");
    }
    if (item.type == "Helmet") {
        this.equiped.helmet = item;
        totalArmor += item.damRest;
    }
    if (item.type == "Chestplate") {
      this.equiped.chestplate = item;
      totalArmor += item.damRest;
    }
    if (item.type == "Sword") {
      this.equiped.weapon = item;
      totalDam += item.dam ;
    }
    if (item.type == "Shield") {
      this.equiped.shield = item;
      totalArmor += item.damRest;
      totalDam += item.dam ;
    }
    this.dam = totalDam;
    this.armorRating = totalArmor;
    this.effectsAdd(this.equiped);
    this.updateOrRemove("update");
  }
  
  unequipItem(slot){
      this.updateOrRemove("remove");
    if (slot == "Helmet") {
      this.armorRating -= this.equiped.helmet.damRest;
      this.equiped.helmet = undefined;
      this.effectsAdd(this.equiped);
    }
    if (slot == "Chestplate") {
      this.armorRating -= this.equiped.chestplate.damRest;
      this.equiped.chestplate = undefined;
      this.effectsAdd(this.equiped);
    }
    if (slot == "Sword" || slot == "Mace") {
      this.dam -= this.equiped.weapon.dam;
      this.equiped.weapon = undefined;
    }
    if (slot == "Shield") {
      this.armorRating -= this.equiped.shield.damRest;
      this.dam -= this.equiped.weapon.dam;
      this.equiped.shield = undefined;
    }
        this.updateOrRemove("update");

  }
}
