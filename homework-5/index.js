"use strict";
printWithDelay("Мама мыла раму", [2, 6, 7]);

function printWithDelay(from, to) {
  setTimeout(() => {
    const listOfWords = from.split(" ");
    console.log(listOfWords[0]);
    if (to.length > 1 && listOfWords.length > 0) {
      const lengthDifference = to.length - from.length;
      const useLength = to.length - lengthDifference;
      to.length = useLength;
      to;
      to.reverse().pop();
      listOfWords.reverse().pop();
      printWithDelay(listOfWords.reverse().join(" "), to.reverse());
    }
    if (listOfWords.length > 0 && to.length === 1) {
      to.at(-1);
      listOfWords.reverse().pop();
      printWithDelay(listOfWords.reverse().join(" "), to);
    }
    // if (listOfWords.length > to.length) {
    //   to.reverse().pop();
    //   listOfWords.reverse().pop();
    //   printWithDelay(listOfWords.reverse().join(" "), to.reverse());
    // }
  }, to[0] * 1000);
}
