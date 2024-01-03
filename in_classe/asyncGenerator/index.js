let range = {
  from: 1,
  to: 5,

  async *[Symbol.asyncIterator]() {
    // то же, что и [Symbol.asyncIterator]: async function*()
    for (let value = this.from; value <= this.to; value++) {
      // пауза между значениями, ожидание
      await new Promise((resolve) => setTimeout(resolve, 1000));

      yield value;
    }
  },
};

(async () => {
  for await (let value of range) {
    alert(value); // 1, потом 2, потом 3, потом 4, потом 5
  }
})();
