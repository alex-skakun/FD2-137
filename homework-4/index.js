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
        if (!this._isEnabled){
            return null;
        }

        let mistakesArray = [];

        for (let func of this.validationFunctions) {
            const result = func(value);
            if (result !== null) {
                mistakesArray.push({ [func.name]: result })
                if (this.mode === 'single') {
                    break;
                }
            }
        }

        return mistakesArray.length > 0 ? mistakesArray : null;
    }
}

const required = (value) => {
    return value ? null : { required: true };
};

const minLength = (minLength) => {
    return (value) => {
        return String(value).length >= minLength ? null : { minLength: true };
    };
};

const validator = new Validator([required, minLength(5)], 'single');

console.log(validator.validate('test'));
console.log(validator.validate(''));
console.log(validator.validate('successful'));
validator.disable();
console.log(validator.validate('test'));
validator.toggle();
console.log(validator.validate('test'));
validator.toggle(true);