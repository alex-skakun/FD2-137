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

const asyncTransformation = (asynsArr) => {
  let result = asynsArr.map((el) => {
    return new Promise((resolve) => {
      resolve(el + 2);
    });
  });
  return result;

  // любое асинхронное преобразование
};

asyncArray.serialMap(asyncTransformation).then((result) => {
  // result - экземпляр AsyncArray с результатами преобразований
});


