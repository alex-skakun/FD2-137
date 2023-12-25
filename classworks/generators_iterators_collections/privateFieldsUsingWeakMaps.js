const _value = new WeakMap();
const _disabled = new WeakMap();

class Example {
  constructor() {
    _value.set(this, 0);
    _disabled.set(this, false);
  }

  get value() {
    return _value.get(this);
  }

  get disabled() {
    return _disabled.get(this);
  }

  increment() {
    _value.set(this, _value.get(this) + 1);
  }

  decrement() {
    _value.set(this, _value.get(this) - 1);
  }

  enable() {
    _disabled.set(this, false);
  }

  disable() {
    _disabled.set(this, true);
  }

  toggle(state = !_disabled.get(this)) {
    _disabled.set(this, state);
  }
}
