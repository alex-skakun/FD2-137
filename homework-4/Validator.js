"use strict";
class Validator {
  enabled = true;

  constructor(value, modification) {
    this.value = value;
    this.modification = modification;
  }

  enable() {
    this.enabled === false ? (this.enabled = true) : console.log("включен");
  }
  disable() {
    this.enabled === true ? (this.enabled = false) : console.log("выключен");
  }
  toggle() {
    this.enabled === true ? this.disable() : this.enable();
  }
  validate(val) {
    let arrError = [];

    if (this.enabled === true && this.modification) {
      this.value.forEach((el) => {
        return arrError.push(el(val));
      });
    } else if (this.enabled === true && !this.modification) {
      this.value.forEach((el) => {
        return arrError.push(el(val));
      });
    } else {
      return null;
    }

    arrError.forEach((el) => {
      if (el === null) {
        arrError.shift();
      }
    });
    if (arrError.length === 0) {
      return null;
    }

    if (this.modification) {
      let error = "Error:";
      if (this.modification) {
        let arrSearchError = arrError.filter((el) => el !== null);
        arrSearchError.forEach((el) => {
          for (let [key, value] of Object.entries(el)) {
            error += ` ${key} : ${value} ;`;
          }
        });
        return error;
      }
    } else if (!this.modification) {
      return arrError.find((el) => {
        if (el !== null) {
          return el;
        }
      });
    }
  }
}
