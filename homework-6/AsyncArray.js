"use strict";

class Array extends AsyncArray {
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

const asyncTransformation = (el, index, asyncArray) =>
  new Promise((resolve, reject) => {
    // любое асинхронное преобразование
  });
const asyncArray = new AsyncArray(1, 2, 3);

asyncArray.serialMap(asyncTransformation).then((result) => {
  // result - экземпляр AsyncArray с результатами преобразований
});