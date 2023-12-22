class AsyncArray extends Array {
  serialMap(transformFn) {
    let promise = Promise.resolve(new AsyncArray(this.length));

    for (let i = 0; i < this.length; i++) {
      const el = this[i];

      promise = promise.then((targetArray) => {
        return transformFn(el, i, this).then((result) => {
          targetArray[i] = result;
          return targetArray;
        });
      });
    }

    return promise;
  }

  serialMapWithReduce(transformFn) {
    return this.reduce((promise, el, index, arr) => {
      return promise.then((targetArray) => {
        return transformFn(el, index, arr).then((result) => {
          targetArray[index] = result;
          return targetArray;
        });
      });
    }, Promise.resolve(new AsyncArray(this.length)));
  }

  async serialMapWithAwait(transformFn) {
    const result = new AsyncArray(this.length);

    for (let i = 0; i < this.length; i++) {
      const el = this[i];

      result[i] = await transformFn(el, i, this);
    }

    return result;
  }
}

const transformFn = (el) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(el + 2);
      console.log(el + 2);
    }, 2000);
  });

const asyncArray = new AsyncArray(1, 2, 3);

asyncArray.serialMapWithAwait(transformFn).then((res) => {
  console.log(res);
});
