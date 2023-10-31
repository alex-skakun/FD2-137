const valueKey = Symbol('value');
const disabledKey = Symbol('disabled');

class Example {
  [valueKey] = 0;
  [disabledKey] = false;

  get value() {
    return this[valueKey];
  }

  get disabled() {
    return this[disabledKey];
  }

  increment() {
    this[valueKey]++;
  }

  decrement() {
    this[valueKey]--;
  }

  enable() {
    this[disabledKey] = false;
  }

  disable() {
    this[disabledKey] = true;
  }

  toggle(state = !this[disabledKey]) {
    this[disabledKey] = state;
  }
}
