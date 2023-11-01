"use strict";
const required = (val) => {
  return Boolean(val) ? null : { required: true };
};
const minLength = (minLength) => {
  // функция-фалидатор создаётся другой функцией
  return (val) => {
    return String(val).length >= minLength ? null : { minLength: true };
  };
};
const maxLength = (maxLength) => {
  return (val) => {
    return String(val).length <= maxLength ? null : { maxLength: true };
  };
};
const min = (min) => {
  return (val) => {
    return val >= min ? null : { min: true };
  };
};
const max = (max) => {
  return (val) => {
    return val <= max ? null : { max: true };
  };
};

// создаём экземпляр валидатора с конфигурацией по умолчанию (не передаём второй аргумент).
const validator = new Validator([required, minLength(5), maxLength(25)]);

// validator.validate("test"); // вернёт {minLength: true}
// validator.validate(""); // вернёт {required: true}
// validator.validate("successful"); // вернёт null

// validator.disable(); // выключит валидатор
// validator.validate("test"); // вернёт null, валидатор выключен, а значит значение всегда валидно
// validator.toggle(); // снова включит валидатор, т.к. в данный момент он выключен
// validator.validate("test"); // вернёт {minLength: true}

// // создаём экземпляр валидатора с режимом 'mutli'.
const multiValidator = new Validator(
  [required, minLength(5), maxLength(25), min('111110'), max('111113')],
  {
    mode: "multi",
  }
);

// multiValidator.validate("");
