"use strict";
function* getValues(symbols, repeatCount) {
  for (const symbol of symbols) {
    yield* repeatTimes(symbol, repeatCount);
  }
}

// for (const symbol of getValues(['a', 'b'], 5)) {
// console.log(symbol);
// }

function* repeatTimes(value, repeatCount) {
  for (let i = 1; i <= repeatCount; i++) {
    yield value;
  }
}

// [...getValues(['a', 'b'], 5)]
// (10) ['a', 'a', 'a', 'a', 'a', 'b', 'b', 'b', 'b', 'b']
// new Set(getValues(['a', 'b'], 5))
// Set(2) {'a', 'b'}

const iterableObject = {
  values: [1, 2, 3],
  *[Symbol.iterator]() {
    yield* this.values.values();
  },
};

// for (const value of iterableObject){
//     console.log(value)
// }

const _disabled = new WeakMap();

// const disabledKey = Symbol('disabled');

class Test {
  constructor() {
    _disabled.set(this, false);
  }

  get _disabled() {
    _disabled.get(this);
  }

  enable() {
    _disabled.set(this, true);
  }

  toggle(state) {
    _disabled.set(this, state ?? !_disabled.get(this));
  }

  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case "number":
        return 5;
      default:
        return "five";
    }
  }
}

const t = new Test();
