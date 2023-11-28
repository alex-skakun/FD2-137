class AsyncArray extends Array{
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
