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

    if (this.enabled && this.modification) {
      this.value.forEach((el) => {
        return arrError.push(el(val));
      });
    } else if (this.enabled && !this.modification) {
      this.value.forEach((el) => {
        return arrError.push(el(val));
      });
    } else {
      return null;
    }

    if (this.modification && this.enabled) {
      let error = "Errors:";
      if (this.modification) {
        let arrSearchError = arrError.filter((el) => el !== null);

        if (arrSearchError.length === 0) {
          return null;
        }

        arrSearchError.forEach((el) => {
          for (let [key, value] of Object.entries(el)) {
            error += ` ${key} : ${value} ;`;
          }
        });
        return error;
      }
    } else if (!this.modification && this.enabled) {
      let arrSearchError = arrError.filter((el) => el !== null);

      // arrSearchError.forEach((el) => {
      //   if (el === undefined) {
      //     console.log(null);
      //   }
      // });

      if (arrSearchError.length === 0) {
        return null;
      }
      if (!this.modification) {
        return arrSearchError.find((el) => {
          if (el !== null) {
            return el;
          }
        });
      }
    } else {
      return null;
    }
  }
}

// arrError.forEach((el) => {
//   if (el !== null) {
//      arrError.shift();
//   }
// });
// if (arrError.length === 2) {
//   console.log(null);
// }
