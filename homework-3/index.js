"use strict";
const columns = ["name", "count", "price", "name"];
const data = [
  { name: "Хлеб", count: 12, price: 14.99 },
  { name: "Молоко", count: 3, price: 3.2 },
  { name: "Сыр", count: 1, price: 10 },
  { name: "Вода", count: 2, price: 5.5 },
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
let maxWidthObject = calcMaxWidthObject(columns, data);
const textTable = createTextTable(columns, data);
console.log(textTable);

function calcMaxWidthObject(columns, data) {
  let maxCountWidthObject = {};
  columns.forEach((column) => {
    let counter = 0;
    data.forEach((dataObj) => {
      counter = Math.max(counter, dataObj[column].toString().length);
    });
    maxCountWidthObject[column] = counter;
  });
  return maxCountWidthObject;
}

// function removeСommas(inputStrings, targetSymbol, replacementSymbol) {
//   let resultString = "";

//   for (const char of inputStrings) {
//     resultString += char === targetSymbol ? replacementSymbol : char;
//   }

//   return resultString;
// }

// function compareStringLengths(a, b) {
//   if (a.length > b.length) return 1;
//   if (a.length == b.length) return 0;
//   if (a.length < b.length) return -1;
// }

// function countMaxWidth(columns, data) {
//   let arrCountLength = [];
//   data.forEach((dataObj) => {
//     countLength += columns.map((column) => {
//       return arrCountLength.push(String(dataObj[column]));
//     });
//   });
//   arrCountLength.sort(compareStringLengths).at(-1).length;
// }

function buildSymbolsTable(firsytSymbol, SecondSymbol, thirdSymbol) {
  return (
    firsytSymbol +
    columns
      .map((column) => horizontal.repeat(maxWidthObject[column] + 2))
      .join(SecondSymbol) +
    thirdSymbol
  );
}

function createTextTable(columns, data) {
  // let arrCountLength = [];
  // data.forEach((dataObj) => {
  //  columns.map((column) => {
  //     return arrCountLength.push(String(dataObj[column]));
  //   });
  // });
  // countMaxWidth = arrCountLength.sort(compareStringLengths).at(-1).length;

  let res = "";
  data.forEach((dataObj, i) => {
    if (i === 0) {
      `${(res += buildSymbolsTable(leftTop, connectorTop, rightTop))}\n`;
    } else {
      `${(res += buildSymbolsTable(
        connectorLeft,
        connectorCenter,
        connectorRight
      ))}\n`;
    }
    res += `\n${
      vertical +
      columns.map((column) => {
        return typeof dataObj[column] === "number"
          ? String(dataObj[column])
              .padStart(maxWidthObject[column] + 1)
              .padEnd(maxWidthObject[column]) + ' '
          :String(dataObj[column]).padEnd(maxWidthObject[column]).padStart(maxWidthObject[column] + 1) + ' ';
      }) +
      vertical
    }\n`;
  });
  `${(res += buildSymbolsTable(leftBottom, connectorBottom, rightBottom))}\n`;

  return res.split(",").join(vertical);
}
