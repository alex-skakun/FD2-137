("use strict");
import { asyncArray } from "./AsyncArray";

const asyncTransformation = (el, index, asyncArray) =>
  new Promise((resolve, reject) => {
    // любое асинхронное преобразование
  });

asyncArray.serialMap(asyncTransformation).then((result) => {
  // result - экземпляр AsyncArray с результатами преобразований
});



