class Validator {
    constructor(validationFunctions, mode = 'single') {
        this._isEnabled = true;
        this.validationFunctions = validationFunctions;
        this.mode = mode;
    }

    enable() {
        this._isEnabled = true;
    }

    disable() {
        this._isEnabled = false;
    }

    toggle(condition = '') {
        this._isEnabled = condition === '' ? !this._isEnabled : condition;
    }

    validate(value) {
        if (!this._isEnabled) {
            return null;
        }

        let mistakesObject = {};

        for (let func of this.validationFunctions) {
            const result = func(value);
            if (result !== null) {
                mistakesObject = { ...mistakesObject, ...result };
                if (this.mode === 'single') {
                    break;
                }
            }
        }

        return Object.keys(mistakesObject).length > 0 ? mistakesObject : null;
    }
}

const required = (value) => {
    return Boolean(value) ? null : { required: true };
};
const minLength = (minLength) => {
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

const validator = new Validator([
    required,
    minLength(5),
    maxLength(25),
]);

console.log(validator.validate('test'));
console.log(validator.validate(''));
console.log(validator.validate('successful'));
validator.disable();
console.log(validator.validate('test'));
validator.toggle();
console.log(validator.validate('test'));
validator.toggle(true);

const multiValidator = new Validator([
    required,
    minLength(5),
    maxLength(25),
], { mode: 'multi' });

console.log(multiValidator.validate(''));