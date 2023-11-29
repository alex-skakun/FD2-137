function _async(generatorFn) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      const iterator = generatorFn(...args);
      const tick = (nextValue) => {
        const { done, value } = iterator.next(nextValue);

        if (value instanceof Promise) {
          value.then(
            (yieldResult) => {
              if (done) {
                resolve(yieldResult);
              } else {
                tick(yieldResult);
              }
            },
            reject,
          );
        } else {
          tick(value);
        }
      };

      tick();
    });
  };
}


const testFn = _async(function* (a, b, c) {

});

testFn(1, 4, 5);
