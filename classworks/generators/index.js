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
  *[Symbol.iterator]() {
    yield* this.values.values();
  },
};

class Test {
  [symbo];
}
