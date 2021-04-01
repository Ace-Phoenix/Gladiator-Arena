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
    this.hp = hp;
    this.dam = dam;
    this.lives = lives;
    this.attackTimer = attackTimer;
    this.attackSpeed = attackSpeed;
  }
}
