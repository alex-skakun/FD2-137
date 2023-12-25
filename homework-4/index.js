class Validator {

  #enabled;
  #validFuncs;
  #config;

  constructor(validFuncs, config = undefined) {
    this.#enabled = true;
    this.#validFuncs = validFuncs;
    this.#config = config;
    if (!this.#config) 
        this.#config = { mode: "single" };
  }

  enable() {
    this.#enabled = true;
  }

  get enabled() {
    return this.#enabled;
  }

  disable() {
    this.#enabled = false;
  }

  toggle() {
    this.#enabled = !this.#enabled;
  }

  validate(val) {

    if(!this.#enabled)
        return null;

    const resMass = [];
    this.#validFuncs.every((func) => {
      const res = func(val);
      if (res) {
        resMass.push(res);
        if ((this.#config.mode === "single")) 
            return false;
      }
      return true;
    });

    if(!resMass.length)
        return null;

    return Object.assign({}, ...resMass);

  }

}

// создаём функции-фалидаторы
const required = (value) => {
  return Boolean(value) ? null : { required: true };
};
const minLength = (minLength) => {
  // функция-фалидатор создаётся другой функцией
  return (value) => {
    return String(value).length >= minLength ? null : { minLength: true };
  };
};
const maxLength = (maxLength) => {
  return (value) => {
    return String(value).length <= maxLength ? null : { maxLength: true };
  };
};
const min = (min) => {
  return (value) => {
    return value >= min ? null : { min: true };
  };
};
const max = (max) => {
  return (value) => {
    return value <= max ? null : { max: true };
  };
};

// создаём экземпляр валидатора с конфигурацией по умолчанию (не передаём второй аргумент).
const validator = new Validator([required, minLength(5), maxLength(25)]);

console.log(validator.validate("test")); // вернёт {minLength: true}
console.log(validator.validate("")); // вернёт {required: true}
console.log(validator.validate("successful")); // вернёт null

validator.disable(); // выключит валидатор
console.log(validator.validate("test")); // вернёт null, валидатор выключен, а значит значение всегда валидно
validator.toggle(); // снова включит валидатор, т.к. в данный момент он выключен
console.log(validator.validate("test")); // вернёт {minLength: true}
validator.toggle(true); // оставит валидатор включённым, т.к. передано конкретное состояние

// создаём экземпляр валидатора с режимом 'mutli'.
const multiValidator = new Validator([required, minLength(5), maxLength(25)], {
  mode: "multi",
});

console.log(multiValidator.validate("")); // вернёт {required: true, minLength: true} (две ошибки сразу)