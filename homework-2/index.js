"use strict";

const firstString = getUserInput("Entert first string");
const secondString = getUserInput("Entert second string");
const duplicatedSymbols = findDuplicates(string1, string2);

function findDuplicates(firstString, secondString) {
  let arr = [];

  for (elementFirst of firstString) {
    for (elementSecond of secondString) {
      if (elementSecond === elementFirst) {
        arr.push(elementFirst);
      }
    }
  }

  return String(arr);
}

function getUserInput(string) {
  const userInput = prompt(string);
  userInput = typeof string !== "string" ? "" : userInput;

  return userInput;
}

alert(duplicatedSymbols);

