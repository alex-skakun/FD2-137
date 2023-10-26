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
  validate(res) {
    this.enabled === true
      ? this.value.find((el) => {
          if (el(res) !== null) {
            return console.log(el(res));
          } else if (el(res) === null){
            console.log(null);
          }
        })
      : console.log(null);
  }
}
