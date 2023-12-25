const columns = ['name', 'count', 'price'];
const data = [
  { name: 'Хлеб', count: 12, price: 14.99 },
  { name: 'Молоко', count: 3, price: 3.2 },
  { name: 'Сыр', count: 1, price: 10 },
  { name: 'Вода', count: 2, price: 5.5 },
  { name: 'Вода', count: 2, price: 5.5 },
];

const horizontalLine = '─';
const verticalLine = '│';
const topLeftCorner = '┌';
const topRightCorner = '┐';
const bottomLeftCorner = '└';
const bottomRightCorner = '┘';
const leftMop = '├';
const rightMop = '┤';
const cross = '┼';
let maxLengthStr;
let lengthIteratorStr;

// console.log((textTable = `${topLeftCorner}${horizontalLine.repeat(22)}${topRightCorner}`));
// for (const iterator of data) {
//   console.log(
//     `${verticalLine} ${iterator.name}   ${verticalLine} ${iterator.count} ${verticalLine} ${
//       iterator.price
//     } ${verticalLine}\n${leftMop}${horizontalLine.repeat(22)}${rightMop}`
//   );
// }
// console.log(`${bottomLeftCorner}${horizontalLine.repeat(22)}${bottomRightCorner} `);

// закоментировал попытку сделать нормально, было мало времени и нерешил затык с отниманием

// получаю максимальную строку

// for (const raw of data) {
//   console.log(raw)

//   for (const kol in raw) {
//     console.log(raw[kol])

//     }
//   }

function getMaxStringLength(dataLength) {
  let arrNumb = [];
  for (const iterator of dataLength) {
    lengthIteratorStr = iterator.name.length;
    arrNumb.push(lengthIteratorStr);
  }

  maxLengthStr = Math.max.apply(null, arrNumb);
  return maxLengthStr;
}
getMaxStringLength(data);

// добавляю пробелы

function addSpaceInStr(data) {
  let textTable = '';

  let addSpace;
  let lengthIterationStr;
  let spaceСount = 0;
  for (const iterator of data) {
    lengthIterationStr = iterator.name.length;

    if (maxLengthStr === lengthIterationStr) {
      addSpace = iterator.name + '1';
    } else {
      spaceСount =
        Number(maxLengthStr) -
        Number(lengthIteratorStr); /*  тут spaceСount выдавал одно и тоже значение на каждой итерации   */
      console.log(spaceСount);

      console.log(maxLengthStr);
      console.log(lengthIterationStr);

      addSpace = `${iterator.name} ${'1'.repeat(spaceСount)}`;
    }
    console.log(addSpace);
  }
}
addSpaceInStr(data);

// function createTextTable(columns, data) {

//   return textTable;
// }

// createTextTable(columns, data);

// 1 найти самую длинную стоку для каждого столбца 2 обойти все строки, для каждой строки вывеси значение в колонку
