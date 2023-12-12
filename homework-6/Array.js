import { AsyncArray } from "./AsyncArray";

("use strict");
class Array {
  value;

  constructor(value) {
    this.value = value;
  }

  hello() {
    alert(this.value);
  }
}


