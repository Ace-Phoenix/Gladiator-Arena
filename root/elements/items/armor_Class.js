class Armor extends Item {
  constructor(name, type, value, desc, damRest, spec) {
    super(name, type, value, desc)
    this.damRest = damRest;
    this.spec = spec;
  }
}
