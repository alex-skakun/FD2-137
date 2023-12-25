"use strict";

const firstString = getUserInput("Entert first string");
const secondString = getUserInput("Entert second string");
const duplicatedSymbols = findDuplicates(firstString, secondString);

function findDuplicates(firstString, secondString) {
  let arr = firstString.concat(secondString);
  const duplicates = [];
      
    for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    }
  }
  
    return String(duplicates);
  }

function getUserInput(string) {
  let userInput = prompt(string);
  userInput = typeof string !== "string" ? "" : userInput;

  return userInput;
}

alert(duplicatedSymbols);

