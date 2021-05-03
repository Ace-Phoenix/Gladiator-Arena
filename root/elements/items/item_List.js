const weapon = [
   {name: "Common Sword", //name//0
    type: "Sword", //type of weapon
    value: 1, //Items value
    decs: "A simple but effective sword", // A short description of the item
    dam: 2, //How much damage it does
    level: 1,
    img:swordPen},
   {name: "Uncommon Sword", //name//1
    type: "Sword", //type of weapon
    value: 2, //Items value
    decs: "Sliglty more effective than the Common Sword", // A short description of the item
    dam: 3, //How much damage it does
    level: 2,
    img:swordIce
    },
   {name: "Rare Sword", //name//2
    type: "Sword", //type of weapon
    value: 3, //Items value
    decs: "Slighlty more effective than the Uncommon Sword", // A short description of the item
    dam: 4, //How much damage it does
    level: 3,
    img:swordKnife},
   {name: "Super Rare Sword", //name//3
    type: "Sword", //type of weapon
    value: 4, //Items value
    decs: "Slightly more effective than the Rare Sword", // A short description of the item
    dam: 5, //How much damage it does
    level: 4,
    img:swordPoke},
   {name: "Epic Sword", //name//4
    type: "Sword", //type of weapon
    value: 5, //Items value
    decs: "Slightly more effective than the Super Rare Sword", // A short description of the item
    dam: 6, //How much damage it does
    level: 5,
    img:swordShort},
   {name: "Legendary Sword", //name//5
    type: "Sword", //type of weapon
    value: 6, //Items value
    decs: "Slightly more effective than the Epic Sword", // A short description of the item
    dam: 7, //How much damage it does
    level: 6,
    img:swordExaultedBlade},
   {name: "Simple Shield",//6
    type: "Shield",
    value: 1,
    desc: "A basic shield for some protection",
    dam: 1,
    damRest: 1, //How much damage it resists/ block power/ armor
    level: 1,
    img:shieldGlass},
   {name: "Uncommon Shield",//name//7
    type: "Shield",//type of shield
    value: 2,//Items value
    desc: "A basic shield with slightly more prtection than the Common Shield",//A simple description of the item
    dam: 2,//how much damage it does
    damRest: 2, //How much damage it resists/ block power/ armor
    level: 2,
    img:shieldFace},
   {name: "Rare Shield",//name//8
    type: "Shield",//type of shield
    value: 3,//Items value
    desc: "A basic shield with slightly more protection than the Uncommon Shield",//a basic description of the item
    dam: 3,//how much damage it does
    damRest: 3, //How much damage it resists/ block power/ armor
    level: 3,
    img:shieldBlunt},
   {name: "Super Rare Shield",//name//9
    type: "Shield",//type of shield
    value: 4,//items value
    desc: "A not so basic shield that returns the damage it takes back at the enemy",//a simple description of the item
    dam: 4,//how much damage it does
    damRest: 4, //How much damage it resists/ block power/ armor
    level: 4,
    img:shieldSpiked},
   {name: "Epic Shield",//name//10
    type: "Shield",//type of shield
    value: 5,//items value
    desc: "A not so basic shield that returns the damage it takes back at the enemy",//a simple description of the item
    dam: 5,//how much damage it does
    damRest: 5, //How much damage it resists/ block power/ armor
    level: 5,
    img:shieldBulkHead},
   {name: "Legendary Shield",//name//11
    type: "Shield",//type of shield
    value: 6,//items value
    desc: "A not so basic shield that returns the damage it takes back at the enemy",//a simple description of the item
    dam: 6,//how much damage it does
    damRest: 6, //How much damage it resists/ block power/ armor
    level: 6,
    img:shieldLegendary},
   {name: "Common Mace",//name//12
    type: "Mace",
    value: 1,
    desc: "Common Mace in your face",
    dam: 1,
    damRest: 1,
    level: 1,
    img:maceLargeStick},
   {name: "Uncommon Mace",//13
    type: "Mace",
    value: 2,
    desc: "Uncommon Mace in your face",
    dam: 2,
    damRest: 2,
    level: 2,
    img:maceDullAxe},
   {name: "Rare Mace",//14
    type: "Mace",
    value: 3,
    desc: "Rare Mace in your face",
    dam: 3,
    damRest: 3,
    level: 3,
    img:maceWarhammer},
  {name: "Super Rare Mace",//15
    type: "Mace",
    value: 4,
    desc: "Super Rare Mace in your face",
    dam: 4,
    damRest: 4,
    level: 4,
    img:maceMorningstar},
   {name: "Epic Mace",//16
    type: "Mace",
    value: 5,
    desc: "Epic Mace in your face",
    dam: 5,
    damRest: 5,
    level: 5,
    img:maceRockSlime},
   {name: "Legendary Mace",//17
    type: "Mace",
    value: 6,
    desc: "Legendary Mace in your face",
    dam: 6,
    damRest: 6,
    level: 6,
    img:maceFlayl}];


//Color//Status//set
//Blue//Taken//Basic Set
//Green//Taken//Light Set
//Orange//Taken// Ancient set 
//Purple//Taken// Unique Set
//Red//Taken//Heavy Set
//Yellow//Taken//Mystic Set

//@array armor [array of objects] : list of armors
//@objects {restricted : Must Follow : {name:"string",type:???,desc:"string",damRest:integer,spec:"type:percentage"};}
 const armor = [
  {
    name: "Basic Chestplate",//Name
    type: "Chestplate",//Type:Chestplate
    value: 10,//Worth
    desc: "Basic protection from attacks",
    damRest: 20,
    unlocked:1,
    spec:"",
    color:"Blue",
    img:plateBlue
  },//resistance it gives
  {
    name: "Basic Helmet",//Name
    type: "Helmet",//Type:Helmet
    value: 10,//Worth
    desc: "Basic protection from attacks",
    damRest: 20,
    unlocked:1,
    spec:"",
    color:"Blue",
    img:helmBlue
  },//resistance it gives
  {
    name: "Light Chestplate",//Name
    type: "Chestplate",//Type:Chestplate
    value: 20,//Worth
    desc: "Light protection from attacks but more movement",
    unlocked:1,
    damRest: 10,//Gresistance it gives
    spec: "Dodge:5%",
    color:"Green",
    img:plateGreen
  },//Special Effect:Dodge : chance to not take damage
  {
    name: "Light Helmet",
    type: "Helmet",
    value: 20,
    desc: "Light protection from attacks but more movement",
    unlocked:1,
    damRest: 10,
    spec: "Dodge:5%",
    color:"Green",
    img:helmGreen
  },//Special Effect:Dodge : chance to not take damage
  {
    name: "Heavy Chestplate",
    type: "Chestplate",
    value: 30,
    desc: "Heavy protection from attacks",
    unlocked:2,
    damRest: 40,
    spec: "DamageRes:2%",
    color:"Red",
    img:plateRed
  },//Special Effect : DamagaeRes : Increase in damage res by a percentage
  {
    name: "Heavy Helmet",
    type: "Helmet",
    value: 30,
    desc: "Heavy protection from attacks",
    unlocked:2,
    damRest: 40,
    spec: "DamageRes:3%",
    color:"Red",
    img:helmRed
  },//Special Effect : DamagaeRes : Increase in damage res by a percentage
  {
    name: "Unique Chestplate",
    type: "Chestplate",
    value: 40,
    desc: "Moderate protection and unique resistance",
    unlocked:2,
    damRest: 30,
    spec: "AttackSpeed:2%",
    color:"Purple",
    img:platePurple
  },//Special Effect : AttackSpeed : increases attack rate by a percentage
  {
    name: "Unique Helmet",
    type: "Helmet",
    unlocked:2,
    value: 40,
    desc: "Moderate protection and unique resistance",
    damRest: 30,
    spec: "AttackSpeed:1%",
    color:"Purple",
    img:helmPurple
  },//Special Effect : AttackSpeed : increases attack rate by a percentage
  {
    name: "Mythic Chestplate",
    type: "Chestplate",
    value: 50,
    desc: "Light chestplate, with the power of life bestowed upon it",
    unlocked:3,
    damRest: 60,
    spec: "HealthBoost:4%",
    color:"Yellow",
    img:plateYellow
  },//Special Effect : HealthBoost : increases health by a percentage
  {
    name: "Mythic Helmet",
    type: "Helmet",
    value: 50,
    desc: "Light helmet, with the power of life bestowed upon it",
    unlocked:3,
    damRest: 60,
    spec: "HealthBoost:6%",
    color:"Yellow",
    img:helmYellow
  },//Special Effect : HealthBoost : increases health by a percentage
  {
    name: "Ancient Chestplate",
    type: "Chestplate",
    value: 60,
    desc: "Heavily armored chestplate, infused with an ancient power",
    unlocked:3,
    damRest: 50,
    spec: "AttackDamage:2%",
    color:"Orange",
    img:plateOrange
  },//Special Effect : AttackBoost : increases damage by a percentage
  {
    name: "Ancient Helmet",
    type: "Helmet",
    unlocked:3,
    value: 60,
    desc: "Heavily armored helmet, infused with an ancient power",
    damRest: 50,
    spec: "AttackDamage:1%",
    color:"Orange",
    img:helmOrange}];//Special Effect : AttackBoost : increases damage by a percentage
