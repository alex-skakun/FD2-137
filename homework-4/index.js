class Validator {
  enabled;
  constructor(arrFunc, objConfig = { mode: 'single' }) {
    this.arrFunc = arrFunc;
  }
  enable() {}
  disable() {}
  toggle() {}
  validate() {}
}

const required = (value) => {
  return Boolean(value) ? null : { required: true };
};
