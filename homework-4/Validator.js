"use strict";
class Validator {
  enabled = true;

  constructor(value, modification = { mode: "multi" }) {
    this.value = value;
    this.modification = modification;
  }

  enable() {
    this.enabled === false ? (this.enabled = true) : console.log("включен");
  }
  disable() {
    this.enabled === true ? (this.enabled = false)  : console.log("выключен");
  }
  toggle() {
    this.enabled === true ? this.disable() : this.enable();
  }
  validate(val) {
    this.value.forEach((el) => {
      return arrError.push(el(val));
    });

    if (this.enabled === true) {
      if (this.modification.mode === "multi") {
        arrError.forEach((el) => {
          if (el !== null) {
            return console.log(el);
          }
        });
      } else {
        arrError.find((el) => {
          if (el !== null) {
            return console.log(el);
          }
        });
      }
    } else {
      console.log(null);
    }

    if (this.enabled === true) {
      arrError.forEach((el) => {
        if (el !== null) {
          return arrError.shift();
        }
      });
    }
    if (this.enabled === true && arrError.length === this.value.length) {
      console.log(null);
    }
  }
}
