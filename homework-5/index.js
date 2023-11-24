"use strict";

function pullWord(from) {
  const arrlistOfWords = from.split(" ");

  for (let el of arrlistOfWords) {
    el;
  }
}

function getTimeDelay(to) {
  for (let el of to) {
    el;
  }
}

function printWithDelay(from, to) {
  setTimeout(() => {
    clearTimeout(timerId);
  }, 20000);

  const timerId = setInterval(() => pullWord(from), getTimeDelay(to) * 1000);
}

printWithDelay("Мама мыла раму", [2, 6, 7]);
