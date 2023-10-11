"use strict";

// function task1(i) {

//   for (let i = 1; i <= 50; i++){
//       console.log(i)
//   }
// }
// task1()

// function arr (arr1){
//   for (let i = 0; i < arr1.length; i++){
//       console.log(arr1[i]);
//   }
// }
// arr([1,2,3,4,5,6]);

// function func (arr){
//   let res = 0;
//   for (let i = 0; i < arr.length; i++){
//       res *= arr[i];
//   }
//   return res;
// }
// func([1,2,3,4,5,6,7]);

// function func(arr) {
//   let res = arr.filter(function (el, arr) {
//     return el >= 0 && el <= 100 && el % 2 === 0;
//   });
//   return res;
// }

// function func (arr){

//   let res = arr.reduce(function(el, current) {
//     return el + current;
//   }, 0);
//   return res;
//   }
//   func(3046);

// function func(numb) {
//   let i = 0;

//   while (numb >= 50) {
//      numb /= 2;
//     ++i;
//   }

//   return i;
// }

// func(1000);

function arraySum(num) {
  const arr = Array.from(String(num), Number);
  const res = arr.reduce((sum, item) => {
    sum += item;
    if (sum === 13) {
      return true;
    } else {
      return false;
    }
  });
    return res;
}
arraySum(3046);