"use strict";

class AsyncArray extends Array {
  serialMap() {
    const resArr = [];

    let promise = Promise.resolve();
    for (const el of asyncArray) {
      promise = promise
        .then(() => {
          return asyncTransformation(el);
        })
        .then((el) => {
          resArr.push(el);
        });
    }

    return promise.then(() => new AsyncArray(...resArr));
  }
}

const asyncTransformation = (el) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(el + 2);
      console.log(el + 2);
    }, 2000);
  });

const asyncArray = new AsyncArray(1, 2, 3);

asyncArray.serialMap().then((res) => {
  console.log(res);
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
