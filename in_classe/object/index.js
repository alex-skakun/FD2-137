"use strict";

const firstString = getUserInput("Entert first string");
const duplicatedSymbols = collectRepeat(firstString);


function collectRepeat(firstString){
  let duplicated = {};

for (let elem of firstString){

    const currentCounter = duplicated[elem] ?? 0;
    duplicated[elem] = currentCounter + 1;
  }
  return duplicated;
}

function getUserInput(string) {
  let userInput = prompt(string);
  userInput = typeof string !== "string" ? "" : userInput;

  return userInput;
}

alert(duplicatedSymbols);