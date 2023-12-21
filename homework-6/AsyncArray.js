"use strict";

class AsyncArray extends Array {
  serialMap(asyncTransformation) {
    const resArr = [];

    let promise = Promise.resolve();
    for (let i = 0; i < this.length; i++) {
      promise = promise
        .then(() => {
          return asyncTransformation(this[i], i, this);
        })
        .then((el) => {
          resArr.push(el);
        });
    }

    return promise.then(() => new AsyncArray(...resArr));
  }
}

const asyncTransformation = (el, index, asyncArray) =>
  new Promise((resolve) => {
    // Любое асинхронное преобразование
    setTimeout(() => {
      resolve(el + 2);
    }, 2000);
  });

const asyncArray = new AsyncArray([1, 2, 3]);

asyncArray.serialMap(asyncTransformation).then((el) => {
  console.log(el);
});

// const asyncArray = new AsyncArray(1, 2, 3);

// const asynsArr = asynsStr.split();
// const resArr = [];

// const asyncTransformation = (asynsArr) => {
//   setTimeout(() => {
//     return new Promise((resolve) => {
//       resolve(asynsArr[0]);
//     });
//   }, 1_000);
// };

// asyncArray.serialMap(asyncTransformation).then((elArr) => {
//   if (asynsArr.length !== 0) resArr.push(elArr + 2);
//   const result = resArr;

//   asynsArr.length !== 0
//     ? setTimeout(() => {
//         console.log(elArr + 2);
//         asynsArr.reverse().pop();
//         asyncTransformation(asynsArr.reverse());
//       }, 2_000)
//     : console.log(result);
// });
