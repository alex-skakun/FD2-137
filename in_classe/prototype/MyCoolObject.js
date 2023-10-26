class MyCoolObject extends MyObject {
  coolIndex;
  constructor(value, coolIndex) {
    super(value); //обязательно вызов super, если исп. constructor в расширении;
    this.coolIndex = coolIndex;
  }

  bye() {
    console.log(this.coolIndex);
  }
  hello() {
    console.log(this.value);
  }
}
