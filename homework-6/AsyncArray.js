"use strict";

// class Array {
//   value;

//   constructor(value) {
//     this.value = value;
//   }

//   hello() {
//     alert(this.value);
//   }
// }

// new Array();

class AsyncArray extends Array {
  constructor(asyncStr) {
    super(asyncStr);
  }

  serialMap() {}
}

const asyncArray = new AsyncArray(1, 2, 3);

const asyncTransformation = (asynsStr) => {
  const asynsArr = asynsStr.split();

  new Promise((resolve) => {
    setTimeout(() => resolve(el), 1000);
  });

  // любое асинхронное преобразование
};

asyncArray.serialMap(asyncTransformation).then((result) => {
  return (result = asynsArr.map((el) => {
    el + 1;
  }));
  // result - экземпляр AsyncArray с результатами преобразований
});
