//class for the creation of the NPC placing and what not
//-start location(pos)
//-health(hp)
//-damage(dam)
//-spawn rate?(spRate)
//Big class that uses the ai_Class.js to make an AI
//@class Npc : basic so far makeing for the NPC
////@Constructor
////@param pos [object] {restricted:Must follow {xPos:#,yPos:#}} : Coords of NPC
////@param hp [object] {retsricted : Must follow {current:#,total:#}} : hp of the NPC
////@param dam [object] {restricted : Must follow {min: #, max:#}}:damage of the NPC
////@param spRate [integer:time] : spawn rate of the NPC
class Npc {
  constructor(pos, hp, dam, spRate,type) {
    this.pos = pos;
    this.hp = hp;
    this.dam = dam;
    this.spRate = spRate;
    this.type = type;
  }
}
