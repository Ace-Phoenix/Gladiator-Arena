class Combat extends Item {
  constructor(name, type, value, desc, dam, damRest,retDam) {
    super(name, type, value, desc);
    this.dam = dam;
    this.damRest = damRest;
    this.retDam = retDam;
  }
}
