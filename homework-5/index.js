"use strict";

printWithDelay("Мама мыла раму", [2, 6, 7]);

function printWithDelay(from, to) {

  setInterval(() => {
    const listOfWords = from.split(" ");
    console.log(listOfWords[0]);
    listOfWords.reverse().pop();
    if (to.length <= from.length){
      to.reverse().pop();
      printWithDelay(listOfWords.join(" "));
    }
  }, to * 1000);
}
