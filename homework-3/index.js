"use strict";
const columns = ["name", "count", "price"];
const data = [
  { name: "Хлеб", count: 12, price: 14.99 },
  { name: "Молоко", count: 3, price: 3.2 },
  { name: "Сыр", count: 1, price: 10 },
  { name: "Вода", count: 2, price: 5.5 },
];
const horizontal = "━";
const rightTop = "┓";
const leftTop = "┏";
const rightBottom = "┛";
const leftBottom = "┗";
const vertical = "┃";
const connectorTop = "┳";
const connectorBottom = "┻";
const connectorRight = "┫";
const connectorLeft = "┣";
const connectorCenter = "╋";
const textTable = createTextTable(columns, data);

function removeСommas(inputStrings, targetSymbol, replacementSymbol) {
  let resultString = "";

  for (const char of inputStrings) {
    resultString += char === targetSymbol ? replacementSymbol : char;
  }

  return resultString;
}

function compareStringLengths(a, b) {
  if (a.length > b.length) return 1;
  if (a.length == b.length) return 0;
  if (a.length < b.length) return -1;
}

function createTextTable(columns, data) {

let countLength = "";
  let arrCountLength = [];
  data.forEach((dataObj) => {
    countLength += columns.map((column) => {
      return arrCountLength.push(String(dataObj[column]));
    });
  });
  let countMaxWidth = arrCountLength.sort(compareStringLengths).at(-1).length;
 
  let res = "";
  data.forEach((dataObj) => {
    res += columns.map((column, index) => {
      return index === 2
        ? `${String(dataObj[column]).padEnd(countMaxWidth)} \n`
        : String(dataObj[column]).padEnd(countMaxWidth);
    });
  });
  return removeСommas(res, ",", " ");
}
console.log(textTable);
