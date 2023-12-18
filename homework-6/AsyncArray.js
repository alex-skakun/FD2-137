"use strict";

class Array {
  value;

  constructor(value) {
    this.value = value;
  }

  map() {
    alert(this.value);
  }
}

new Array();

class AsyncArray extends Array {
  constructor(asyncStr) {
    super(asyncStr);
  }

  map() {
    alert(this.value);
    this.serialMap();
  }

  serialMap() {}
}

const asyncArray = new AsyncArray(1, 2, 3);
const asynsArr = asynsStr.split();
const resArr = [];

const asyncTransformation = (asynsArr) => {
  
  setTimeout(() => {
    return new Promise((resolve) => {
      resolve(asynsArr[0]);
    }).then((elArr) => {
      const result = resArr.push(elArr + 2);
      asynsArr.length !== 0
        ? setTimeout(() => {
            console.log(elArr + 2);
            asynsArr.reverse().pop();
            asyncTransformation(asynsArr.reverse());
          }, 2_000)
        : console.log(result);
    });
  }, 1_000);
};

asyncArray.serialMap(asyncTransformation).then((result) => {
  // result - экземпляр AsyncArray с результатами преобразований
});
