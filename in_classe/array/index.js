"use strict";

// function collectRepeat(str){

//     // const a1 = str.split('');
//     // const a2 = [...str];

//     return [...str].reduce((stat, symbol) => {
//          stat[symbol] = (stat[symbol] ?? 0) + 1;
//          return stat;
// }, {});
//     }
//     collectRepeat(str);

function returnArrNum(...num) {
  return num.filter((elem) => elem % 2 === 0);
}

returnArrNum(1, 2, 3, 4, 5, 6);
