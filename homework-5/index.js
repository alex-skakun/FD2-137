"use strict";
printWithDelay("Мама мыла раму", [2, 6, 7]);

function printWithDelay(from, to) {
  setTimeout(() => {
    const listOfWords = from.split(" ");
    console.log(listOfWords[0]);
    listOfWords.reverse().pop();
    listOfWords.reverse();
    if (listOfWords.length >= to.length && to.length === 1) {
      printWithDelay(listOfWords.join(" "), to);
    }
    if (listOfWords.length > to.length && to.length > 1) {
      to.reverse().pop();
      printWithDelay(listOfWords.join(" "), to.reverse());
    }
    if (to.length >= listOfWords.length && to.length > 1) {
      to.reverse().pop();
      printWithDelay(listOfWords.join(" "), to.reverse());
    }
    if (to.length >= listOfWords.length && to.length > 1) {
      to.pop();
      listOfWords;
    }
    if (listOfWords.length < 1 && to.length === 1) {
      to.pop();
      listOfWords;
    }
  }, to[0] * 1000);
}
