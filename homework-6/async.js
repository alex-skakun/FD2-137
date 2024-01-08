function _async(genFunc) {
  return (...params) =>
    new Promise((resolve) => {
      const gen = genFunc(...params);
      const func = (v) => {
        const r = gen.next(v);
        if (!r.done) r.value.then(func);
        else resolve(r.value);
      };
      func();
    });
}

const someAsyncAction = (el) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(el * 2), 1 * 1000);
  });
};

const oneMoreAsyncAction = (el) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(el * 2), 2 * 1000);
  });
};

const testFunction = _async(function* (a, b, c) {
  return (
    ((yield someAsyncAction(a)) + (yield oneMoreAsyncAction(b))) /  (yield oneMoreAsyncAction(c))
  );
});



testFunction(2, 3, 1).then((a) => console.log(a));
