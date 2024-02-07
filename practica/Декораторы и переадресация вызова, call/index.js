// "use strict";

// function slow(x) {
//   // здесь могут быть ресурсоёмкие вычисления
//   alert(`Called with ${x}`);
//   return x;
// }

// function cachingDecorator(func) {
//   let cache = new Map();

//   return function (x) {
//     if (cache.has(x)) {
//       // если кеш содержит такой x,
//       return cache.get(x); // читаем из него результат
//     }

//     let result = func(x); // иначе, вызываем функцию

//     cache.set(x, result); // и кешируем (запоминаем) результат
//     return result;
//   };
// }

// slow = cachingDecorator(slow);

// alert(slow(1)); // slow(1) кешируем
// alert("Again: " + slow(1)); // возвращаем из кеша

// alert(slow(2)); // slow(2) кешируем
// alert("Again: " + slow(2)); // возвращаем из кеша

// let worker = {
//   someMethod() {
//     return 1;
//   },

//   slow(x) {
//     alert("Called with " + x);
//     return x * this.someMethod(); // (*)
//   }
// };

// function cachingDecorator(func) {
//   let cache = new Map();
//   return function(x) {
//     if (cache.has(x)) {
//       return cache.get(x);
//     }
//     let result = func.call(this, x); // теперь 'this' передаётся правильно
//     cache.set(x, result);
//     return result;
//   };
// }

// worker.slow = cachingDecorator(worker.slow); // теперь сделаем её кеширующей

// alert( worker.slow(2) ); // работает
// alert( worker.slow(2) ); // работает, не вызывая первоначальную функцию (кешируется)

// сделаем worker.slow кеширующим
// let worker = {
//   someMethod() {
//     return 1;
//   },

//   slow(x) {
//     // здесь может быть страшно тяжёлая задача для процессора
//     alert("Called with " + x);
//     return x * this.someMethod(); // (*)
//   }
// };

// // тот же код, что и выше
// function cachingDecorator(func) {
//   let cache = new Map();
//   return function(x) {
//     if (cache.has(x)) {
//       return cache.get(x);
//     }
//     let result = func(x); // (**)
//     cache.set(x, result);
//     return result;
//   };
// }

// alert( worker.slow(1) ); // оригинальный метод работает

// worker.slow = cachingDecorator(worker.slow); // теперь сделаем его кеширующим

// alert( worker.slow(2) ); // Ой! Ошибка: не удаётся прочитать свойство 'someMethod' из 'undefined'

// let worker = {
//   someMethod() {
//     return 1;
//   },

//   slow(x) {
//     alert("Called with " + x);
//     return x * this.someMethod(); // (*)
//   }
// };

// function cachingDecorator(func) {
//   let cache = new Map();
//   return function(x) {
//     if (cache.has(x)) {
//       return cache.get(x);
//     }
//     let result = func.call(this, x); // теперь 'this' передаётся правильно
//     cache.set(x, result);
//     return result;
//   };
// }

// worker.slow = cachingDecorator(worker.slow); // теперь сделаем её кеширующей

// alert( worker.slow(2) ); // работает
// alert( worker.slow(2) ); // работает, не вызывая первоначальную функцию (кешируется)

// let worker = {
//   slow(min, max) {
//     alert(`Called with ${min},${max}`);
//     return min + max;
//   }
// };

// function cachingDecorator(func, hash) {
//   let cache = new Map();
//   return function() {
//     let key = hash(arguments); // (*)
//     if (cache.has(key)) {
//       return cache.get(key);
//     }

//     let result = func.call(this, ...arguments); // (**)

//     cache.set(key, result);
//     return result;
//   };
// }

// function hash(args) {
//   return args[0] + ',' + args[1];
// }

// worker.slow = cachingDecorator(worker.slow, hash);

// alert( worker.slow(3, 5) ); // работает
// alert( "Again " + worker.slow(3, 5) ); // аналогично (из кеша)




// function work(a, b) {
//   alert(a + b); // произвольная функция или метод
// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//   alert("call:" + args.join()); // "call:1,2", "call:4,5"
// }

// function spy(func) {
//   function wrapper(...args) {
//     // мы используем ...args вместо arguments для хранения "реального" массива в wrapper.calls
//     wrapper.calls.push(args);
//     return func.apply(this, args);
//   }

//   wrapper.calls = [];

//   return wrapper;
// }





function delay(f, ms) {

  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  };

}

let f1000 = delay(alert, 1000);

f1000("test"); // показывает "test" после 1000 мс