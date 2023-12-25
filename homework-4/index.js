class Validator {
    constructor(metods, conf = { mode: 'single' }) {
        this.enabled = true;
        this.metods = metods;
        this.conf = conf;
    }

    enable() {
        this.enabled = true;
    }

    disable() {
        this.enabled = false;
    }

    toggle(value) {
        this.enabled = value || (this.enabled === true ? false : true)
    }

    validate(value) {
        if (!this.enabled) {
            return null
        }
        if (this.conf.mode === 'multi') {
            const error = [];
            for (const func of this.metods) {
                if (func(value) != null) {
                    error.push(func(value));
                }
            }
            if (error.length > 0) {
                return error
            } else {
                return null
            }
        } else {

            for (const func of this.metods) {
                if (func(value) != null) {
                    return func(value)
                }
            }
            return null
        }
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
const validator = new Validator([
    required,
    minLength(5),
    maxLength(25),
]);
validator.validate('test'); // вернёт {minLength: true}
validator.validate(''); // вернёт {required: true}
validator.validate('successful'); // вернёт null

validator.disable(); // выключит валидатор
validator.validate('test'); // вернёт null, валидатор выключен, а значит значение всегда валидно
validator.toggle(); // снова включит валидатор, т.к. в данный момент он выключен
validator.validate('test'); // вернёт {minLength: true}
validator.toggle(true); // оставит валидатор включённым, т.к. передано конкретное состояние

// создаём экземпляр валидатора с режимом 'mutli'. 
const multiValidator = new Validator([
    required,
    minLength(5),
    maxLength(25),
], { mode: 'multi' });

multiValidator.validate(''); // вернёт {required: true, minLength: true} (две ошибки сразу)
