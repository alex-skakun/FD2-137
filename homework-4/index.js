class Validator {
    enabled;
    legitCheck;
    constructor(legitCheck) {
      this.enabled = true;
      this.legitCheck = legitCheck;
    }
        enable() {
            this.enabled = true;
        }

        disable() {
            this.enabled = false;
        }

        toggle() {
            this.enabled = !this.enabled;
        }
}


const required = (value) => {
    return Boolean(value) ? null : {required: true};
};
const minLength = (minLength) => {

    return (value) => {
        return String(value).length >= minLength ? null : {minLength: true};
    };
};
const maxLength = (maxLength) => {
    return (value) => {
        return String(value).length <= maxLength ? null : {maxLength: true};
    };
};
const min = (min) => {
    return (value) => {
        return value >= min ? null : {min: true};
    };
};
const max = (max) => {
    return (value) => {
        return value <= max ? null : {max: true};
    };
};

const validator = new Validator([
    required,
    minLength(5),
    maxLength(25),
]);

validator.disable(); // выключит валидатор
// validator.validate('test'); // вернёт null, валидатор выключен, а значит значение всегда валидно
validator.toggle(); // снова включит валидатор, т.к. в данный момент он выключен
// validator.validate('test'); // вернёт {minLength: true}
validator.toggle(true); // оставит валидатор включённым, т.к. передано конкретное состояние
