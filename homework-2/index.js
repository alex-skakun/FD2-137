"use strict";

const firstString = getUserInput("Entert first string");
const secondString = getUserInput("Entert second string");
const duplicatedSymbols = findDuplicates(firstString, secondString);

function findDuplicates(firstString, secondString) {
  let arr = [];

  for (let elementFirst of firstString) {
    for (let elementSecond of secondString) {
      if (elementSecond === elementFirst) {
        arr.push(elementFirst);
      }
    }
  }

  return String(arr);
}

function getUserInput(string) {
  let userInput = prompt(string);
  userInput = typeof string !== "string" ? "" : userInput;

  return userInput;
}

alert(duplicatedSymbols);

