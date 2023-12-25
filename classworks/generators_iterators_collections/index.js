function* getValues(symbols, repeatCount) {
  for (const symbol of symbols) {
    yield* repeatTimes(symbol, repeatCount);
  }
}

function* repeatTimes(value, repeatCount) {
  for (let i = 1; i <= repeatCount; i++) {
    yield value;
  }
}

const iterableObject = {
  values: [1, 2, 3],
  * [Symbol.iterator]() {
    yield* this.values.values();
  },
};

class Test {
  get [Symbol.toStringTag]() {
    return 'CoolTest';
  }

  * [Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }

  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case 'number':
        return 5;
      default:
        return 'five';
    }
  }
}
