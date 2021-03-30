class Combat extends Item {
  constructor(name, type, value, desc, dam, damRest) {
    super(name, type, value, desc)
    this.dam = dam;
    this.damRest = damRest;
  }
}
