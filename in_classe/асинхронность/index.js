"use strict";
const timeId = setTimeout(() => {
  console.log(5);
}, 5_000);

const value = 5;

setTimeout(() => {
  clearTimeout(timeId);
  console.log("clear");
  setTimeout(() => {
    console.log("clear I");
    clearInterval(intervalId);
  }, 3_000);
}, 3_000);

let s = "";

const intervalId = setInterval(() => {
  console.log(++s);
}, 1_000);
