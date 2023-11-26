"use strict";

setTimeout(() => {
  clearTimeout(pullWord());
}, 2_0000);

setInterval(
  () =>
    function pullWord(from) {
      const arrlistOfWords = from.split(" ");

      return arrlistOfWords.shift(el);
    },
  3_000
);

setTimeout(() => {
  clearTimeout(getTimeDelay());
}, 3_0000);

setInterval(
  () =>
    function getTimeDelay(to) {
      return to.shift(el);
    },
  3_000
);

function printWithDelay(from, to) {
  setTimeout(() => {
    const timerId = setInterval(
      () => console.log(pullWord(from)),
      getTimeDelay(to) * 1_000
    );

    setTimeout(() => {
      clearTimeout(timerId);
    }, 1_0000);
  }, 1_000);
}

printWithDelay("Мама мыла раму", [2, 6, 7]);
