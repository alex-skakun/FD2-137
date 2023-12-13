"use strict";

import Array from "./Array";

new Array();

class AsyncArray extends Array {
  #coolIndex;

  constructor(value, coolIndex) {
    super(value);
    this.#coolIndex = coolIndex;
  }

  hello() {
    console.log(this.value);
    this.#bye();
  }

  #bye() {
    console.log(this.#coolIndex);
  }
}

const asyncArray = new AsyncArray(1, 2, 3);
