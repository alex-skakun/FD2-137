function* _async(generatorFunc) {
    const generator = generatorFunc();
    let lastPromise;

    try {
      while (true) {
        const result = yield lastPromise;
        lastPromise = Promise.resolve(generator.next(result).value);
      }
    } catch (error) {
      lastPromise = Promise.reject(error);
    }

    return lastPromise.value;
  }