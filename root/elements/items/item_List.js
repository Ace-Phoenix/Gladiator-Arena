const weapon = [
   {name: "Common Sword", //name
    type: "Sword", //type of weapon
    value: 1, //Items value
    decs: "A simple but effective sword", // A short description of the item
    dam: 2, //How much damage it does
    level: 1},
   {name: "Uncommon Sword", //name
    type: "Sword", //type of weapon
    value: 2, //Items value
    decs: "Sliglty more effective than the Common Sword", // A short description of the item
    dam: 3, //How much damage it does
    level: 2},
   {name: "Rare Sword", //name
    type: "Sword", //type of weapon
    value: 3, //Items value
    decs: "Slighlty more effective than the Uncommon Sword", // A short description of the item
    dam: 4, //How much damage it does
    level: 3},
   {name: "Super Rare Sword", //name
    type: "Sword", //type of weapon
    value: 4, //Items value
    decs: "Slightly more effective than the Rare Sword", // A short description of the item
    dam: 5, //How much damage it does
    level: 4},
   {name: "Epic Sword", //name
    type: "Sword", //type of weapon
    value: 5, //Items value
    decs: "Slightly more effective than the Super Rare Sword", // A short description of the item
    dam: 6, //How much damage it does
    level: 5},
   {name: "Legendary Sword", //name
    type: "Sword", //type of weapon
    value: 6, //Items value
    decs: "Slightly more effective than the Epic Sword", // A short description of the item
    dam: 7, //How much damage it does
    level: 6},
   {name: "Rare Heavy Sword", //name
    type: "Sword", //type of weapon
    value: 4, //Items value
    decs: "Heavy attacks", // A short description of the item
    dam: 5, //How much damage it does
    level: 3},
   {name: "Super Rare Heavy Sword", //name
    type: "Sword", //type of weapon
    value: 5, //Items value
    decs: "Slightly more effective than the Rare Heavy Sword", // A short description of the item
    dam: 6, //How much damage it does
    level: 4},
   {name: "Epic Heavy Sword", //name
    type: "Sword", //type of weapon
    value: 6, //Items value
    decs: "More effective than the Super Rare Heavy Sword", // A short description of the item
    dam: 7, //How much damage it does
    level: 5},
   {name: "Legendary Heavy Sword", //name
    type: "Sword", //type of weapon
    value: 7, //Items value
    decs: "Slightly more effective than the Epic Heavy Sword", // A short description of the item
    dam: 8, //How much damage it does
    level: 6},
   {name: "Simple Shield",
    type: "Shield",
    value: 1,
    desc: "A basic shield for some protection",
    dam: 1,
    damRest: 1, //How much damage it resists/ block power/ armor
    level: 1},
   {name: "Uncommon Shield",//name
    type: "Shield",//type of shield
    value: 2,//Items value
    desc: "A basic shield with slightly more prtection than the Common Shield",//A simple description of the item
    dam: 2,//how much damage it does
    damRest: 2, //How much damage it resists/ block power/ armor
    level: 2},
   {name: "Rare Shield",//name
    type: "Shield",//type of shield
    value: 3,//Items value
    desc: "A basic shield with slightly more protection than the Uncommon Shield",//a basic description of the item
    dam: 3,//how much damage it does
    damRest: 3, //How much damage it resists/ block power/ armor
    level: 3},
   {name: "Super Rare Shield",//name
    type: "Shield",//type of shield
    value: 4,//items value
    desc: "A not so basic shield that returns the damage it takes back at the enemy",//a simple description of the item
    dam: 4,//how much damage it does
    damRest: 4, //How much damage it resists/ block power/ armor
    level: 4},
   {name: "Epic Shield",//name
    type: "Shield",//type of shield
    value: 5,//items value
    desc: "A not so basic shield that returns the damage it takes back at the enemy",//a simple description of the item
    dam: 5,//how much damage it does
    damRest: 5, //How much damage it resists/ block power/ armor
    level: 5},
   {name: "Legendary Shield",//name
    type: "Shield",//type of shield
    value: 6,//items value
    desc: "A not so basic shield that returns the damage it takes back at the enemy",//a simple description of the item
    dam: 6,//how much damage it does
    damRest: 6, //How much damage it resists/ block power/ armor
    level: 6},
   {name: "Common Mace",//name
    type: "Mace",
    value: 1,
    desc: "Common Mace in your face",
    dam: 1,
    damRest: 1,
    level: 1},
   {name: "Uncommon Mace",
    type: "Mace",
    value: 2,
    desc: "Uncommon Mace in your face",
    dam: 2,
    damRest: 2,
    level: 2},
   {name: "Rare Mace",
    type: "Mace",
    value: 3,
    desc: "Rare Mace in your face",
    dam: 3,
    damRest: 3,
    level: 3},
  {name: "Super Rare Mace",
    type: "Mace",
    value: 4,
    desc: "Super Rare Mace in your face",
    dam: 4,
    damRest: 4,
    level: 4},
   {name: "Epic Mace",
    type: "Mace",
    value: 5,
    desc: "Epic Mace in your face",
    dam: 5,
    damRest: 5,
    level: 5},
   {name: "Legendary Mace",
    type: "Mace",
    value: 6,
    desc: "Legendary Mace in your face",
    dam: 6,
    damRest: 6,
    level: 6}];
//@array armor [array of objects] : list of armors
//@objects {restricted : Must Follow : {name:"string",type:???,desc:"string",damRest:integer,spec:"type:percentage"};}
 const armor = [
   {name: "Basic Chestplate",//Name
    type: "Chestplate",//Type:Chestplate 
    value: 1,//Worth
    desc: "Basic protection from attacks",
    damRest: 2},//resistance it gives
   {name: "Basic Helmet",//Name
    type: "Helmet",//Type:Helmet
    value: 1,//Worth
    desc: "Basic protection from attacks",
    damRest: 2},//resistance it gives
   {name: "Light Chestplate",//Name
    type: "Chestplate",//Type:Chestplate
    value: 2,//Worth
    desc: "Light protection from attacks but more movement",
    damRest: 1,//Gresistance it gives
    spec: "Dodge:5%"},//Special Effect:Dodge : chance to not take damage
   {name: "Light Helmet",
    type: "Helmet",
    value: 2,
    desc: "Light protection from attacks but more movement",
    damRest: 1,
    spec: "Dodge:5%"},//Special Effect:Dodge : chance to not take damage
   {name: "Heavy Chestplate",
    type: "Chestplate",
    value: 3,
    desc: "Heavy protection from attacks",
    damRest: 4,
    spec: "DamageRes:2%"},//Special Effect : DamagaeRes : Increase in damage res by a percentage
   {name: "Heavy Helmet",
    type: "Helmet",
    value: 3,
    desc: "Heavy protection from attacks",
    damRest: 4,
    spec: "DamageRes:3%"},//Special Effect : DamagaeRes : Increase in damage res by a percentage
   {name: "Unique Chestplate",
    type: "Chestplate",
    value: 4,
    desc: "Moderate protection and unique resistance",
    damRest: 3,
    spec: "AttackSpeed:2%"},//Special Effect : AttackSpeed : increases attack rate by a percentage
   {name: "Unique Helmet",
    type: "Helmet",
    value: 4,
    desc: "Moderate protection and unique resistance",
    damRest: 3,
    spec: "AttackSpeed:1%"},//Special Effect : AttackSpeed : increases attack rate by a percentage
   {name: "Mythic Chestplate",
    type: "Chestplate",
    value: 5,
    desc: "Light chestplate, with the power of life bestowed upon it",
    damRest: 3,
    spec: "HealthBoost:1%"},//Special Effect : HealthBoost : increases health by a percentage
   {name: "Mythic Helmet",
    type: "Helmet",
    value: 5,
    desc: "Light helmet, with the power of life bestowed upon it",
    damRest: 3,
    spec: "HealthBoost:1%"},//Special Effect : HealthBoost : increases health by a percentage
   {name: "Ancient Chestplate",
    type: "Chestplate",
    value: 6,
    desc: "Heavily armored chestplate, infused with an ancient power",
    damRest: 4,
    spec: "AttackDamage:2%"},//Special Effect : AttackBoost : increases damage by a percentage
   {name: "Ancient Helmet",
    type: "Helmet",
    value: 6,
    desc: "Heavily armored helmet, infused with an ancient power",
    damRest: 4,
    spec: "AttackDamage:1%"}];//Special Effect : AttackBoost : increases damage by a percentage
