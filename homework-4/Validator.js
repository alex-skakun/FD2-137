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
    this.value.forEach((el) => {
      return arrSingleError.push(el(res));
    });

    if (this.enabled === true) {
      arrSingleError.find((el) => {
        if (el !== null) {
          return console.log(el);
        }
      });
    } else {
      console.log(null);
    }

    if (this.enabled === true) {
      arrSingleError.forEach((el) => {
        if (el !== null) {
          return arrSingleError.shift();
        }
      });
    }
    if (this.enabled === true && arrSingleError.length === this.value.length) {
      console.log(null)
    }
  }
}
