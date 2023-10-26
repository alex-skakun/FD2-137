"use strict";
class Validator {
  value;
  enabled = true;

  constructor(value) {
    this.value = value;
  }

  enable() {
    this.enabled === true ? console.log("включен") : (this.enabled = true);
  }
  disable() {
    this.enabled === false ? console.log("выключен") : (this.enabled = false);
  }
  toggle() {
    this.enabled === true ? this.disable() : this.enable();
  }
  validate() {
    this.enabled === true
      ? this.value.forEach((el) => {
          return el[0]
        })
      : null;
  }
}
