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
  validate(value) {
    this.enabled === true
      ? validator.forEach((el) => {
        return el
      })
      : (value = null);
  }
}
