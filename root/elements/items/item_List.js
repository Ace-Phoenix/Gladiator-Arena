const Weapon = [
  {
    name: "Common Sword", //name
    type: Sword, //type of weapon
    value: 1, //Items value
    decs: "A simple but effective sword", // A short description of the item
    dam: 2, //How much damage it does
    level: 1
  },
  {
    name: "Uncommon Sword", //name
    type: Sword, //type of weapon
    value: 2, //Items value
    decs: "Sliglty more effective than the Common Sword", // A short description of the item
    dam: 3, //How much damage it does
    level: 2
  },
  {
    name: "Rare Sword", //name
    type: Sword, //type of weapon
    value: 3, //Items value
    decs: "Slighlty more effective than the Uncommon Sword", // A short description of the item
    dam: 4, //How much damage it does
    level: 3
  },
  {
    name: "Super Rare Sword", //name
    type: Sword, //type of weapon
    value: 4, //Items value
    decs: "Slightly more effective than the Rare Sword", // A short description of the item
    dam: 5, //How much damage it does
    level: 4
  },
  {
    name: "Epic Sword", //name
    type: Sword, //type of weapon
    value: 5, //Items value
    decs: "Slightly more effective than the Super Rare Sword", // A short description of the item
    dam: 6, //How much damage it does
    level: 5
  },
  {
    name: "Legendary Sword", //name
    type: Sword, //type of weapon
    value: 6, //Items value
    decs: "Slightly more effective than the Epic Sword", // A short description of the item
    dam: 7, //How much damage it does
    level: 6
  },
  {
    name: "Rare Heavy Sword", //name
    type: Sword, //type of weapon
    value: 4, //Items value
    decs: "Heavy attacks", // A short description of the item
    dam: 5, //How much damage it does
    level: 3
  },
  {
    name: "Super Rare Heavy Sword", //name
    type: Sword, //type of weapon
    value: 5, //Items value
    decs: "Slightly more effective than the Rare Heavy Sword", // A short description of the item
    dam: 6, //How much damage it does
    level: 4
  },
  {
    name: "Epic Heavy Sword", //name
    type: Sword, //type of weapon
    value: 6, //Items value
    decs: "More effective than the Super Rare Heavy Sword", // A short description of the item
    dam: 7, //How much damage it does
    level: 5
  },
  {
    name: "Legendary Heavy Sword", //name
    type: Sword, //type of weapon
    value: 7, //Items value
    decs: "Slightly more effective than the Epic Heavy Sword", // A short description of the item
    dam: 8, //How much damage it does
    level: 6
  },
  {
    name: "Simple Shield",
    type: Shield,
    value: 1,
    desc: "A basic shield for some protection",
    dam: 1,
    damRest: 1, //How much damage it resists/ block power/ armor
    level: 1
  },
  {
    name: "Uncommon Shield",//name
    type: Shield,//type of shield
    value: 2,//Items value
    desc: "A basic shield with slightly more prtection than the Common Shield",//A simple description of the item
    dam: 2,//how much damage it does
    damRest: 2, //How much damage it resists/ block power/ armor
    level: 2
  },
  {
    name: "Rare Shield",//name
    type: Shield,//type of shield
    value: 3,//Items value
    desc: "A basic shield with slightly more protection than the Uncommon Shield",//a basic description of the item
    dam: 3,//how much damage it does
    damRest: 3, //How much damage it resists/ block power/ armor
    level: 3
  },
  {
    name: "Super Rare Shield",//name
    type: Shield,//type of shield
    value: 4,//items value
    desc: "A not so basic shield that returns the damage it takes back at the enemy",//a simple description of the item
    dam: 4,//how much damage it does
    damRest: 4, //How much damage it resists/ block power/ armor
    level: 4
  },
  {
    name: "Epic Shield",//name
    type: Shield,//type of shield
    value: 5,//items value
    desc: "A not so basic shield that returns the damage it takes back at the enemy",//a simple description of the item
    dam: 5,//how much damage it does
    damRest: 5, //How much damage it resists/ block power/ armor
    level: 5
  },
  {
    name: "Legendary Shield",//name
    type: Shield,//type of shield
    value: 6,//items value
    desc: "A not so basic shield that returns the damage it takes back at the enemy",//a simple description of the item
    dam: 6,//how much damage it does
    damRest: 6, //How much damage it resists/ block power/ armor
    level: 6
  },
  {
    name: "Common Mace",//name
    type: Mace,
    value: 1,
    desc: "Common Mace in your face",
    dam: 1,
    damRest: 1,
    level: 1
  },
  {
    name: "Uncommon Mace",
    type: Mace,
    value: 2,
    desc: "Uncommon Mace in your face",
    dam: 2,
    damRest: 2,
    level: 2
  },
  {
    name: "Rare Mace",
    type: Mace,
    value: 3,
    desc: "Rare Mace in your face",
    dam: 3,
    damRest: 3,
    level: 3
  },
  {
    name: "Super Rare Mace",
    type: Mace,
    value: 4,
    desc: "Super Rare Mace in your face",
    dam: 4,
    damRest: 4,
    level: 4
  },
  {
    name: "Epic Mace",
    type: Mace,
    value: 5,
    desc: "Epic Mace in your face",
    dam: 5,
    damRest: 5,
    level: 5
  },
  {
    name: "Legendary Mace",
    type: Mace,
    value: 6,
    desc: "Legendary Mace in your face",
    dam: 6,
    damRest: 6,
    level: 6
  },


]
 const Armor = [
   {
     name: "Basic Chestplate",//name of chestplate
     type: Chestplate,//type of armor
     value: 1,//value
     desc: "Basic protection from attacks",//description for the type of armor
     damRest: 2,//damage resistance
   },
   {
    name: "Basic Helmet",//name of helmet
    type: Helmet,//type of armor
    value: 1,//value
    desc: "Basic protection from attacks",//description
    damRest: 2,//damage resistance
   },
 ]

   {
     name: "Light Chestplate",
     type: Chestplate,
     value: 2,
     desc: "Light protection from attacks but more movement",
     damRest: 1,
     spec: "weaker",//special
   },

   {
    name: "Light Helmet",
    type: Helmet,
    value: 2,
    desc: "Light protection from attacks but more movement",
    damRest: 1,
    spec: "weaker",//special
   },

 ]
  {
     name: "Heavy Chestplate",
     type: Chestplate,
     value: 3,
     desc: "Heavy protection from attacks",
     damRest: 4,
     spec: "extra damage resistance",
   },

   {
    name: "Heavy Helmet",
    type: Helmet,
    value: 3,
    desc: "Heavy protection from attacks",
    damRest: 4,
    spec: "extra damage resistance",
   },
 ]
  {
     name: "Unique Chestplate",
     type: Chestplate,
     value: 4,
     desc: "Moderate protection and unique resistance",
     damRest: 3,
     spec: "Unique resistance",
   },

   {
    name: "Unique Helmet",
    type: Helmet,
    value: 4,
    desc: "Moderate protection and unique resistance",
    damRest: 3,
    spec: "Unique resistance",
   },
 ]

{
     name: "Mythic Chestplate",
     type: Chestplate,
     value: 5,
     desc: "Light protection and mythic resistance",
     damRest: 3,
     spec: "mythic resistance",
   },

   {
    name: "Mythic Helmet",
    type: Helmet,
    value: 5,
    desc: "Moderate protection and mythic resistance",
    damRest: 3,
    spec: "mythic resistance",
   },
 ]




{
     name: "Ancient Chestplate",
     type: Chestplate,
     value: 6,
     desc: "Heavy protection and ancient power",
     damRest: 4,
     spec: "Ancient power",
   },

   {
    name: "Ancient Helmet",
    type: Helmet,
    value: 6,
    desc: "Heavy protection and ancient power",
    damRest: 4,
    spec: "Ancient power",
   }
 ]
