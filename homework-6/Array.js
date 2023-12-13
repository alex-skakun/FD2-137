("use strict");

export default class Array {
  value;

  constructor(value) {
    this.value = value;
  }

  hello() {
    alert(this.value);
  }
}
