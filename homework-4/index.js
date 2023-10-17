class Validator {
    constructor(functions, mode) {
        this.functions = functions;
        this.mode = mode;
    }
    enable() {
        this.enabled = true;
    }
    disable() {
        this.enabled = false;
    }
    toggle(parametr = '') {
        parametr === '' ? this.enabled = !this.enabled : this.enabled = parametr
    }
    validate(value) {
        if (this.enabled === false) {
            return null
        }
        let errors = []
        for (let a of this.functions) {
            const check = a(value)
            if (check !== null) {
                errors.push({ [a.name]: check })
                if (this.mode === undefined) {
                    break
                }
            }
        }
        return errors.length !== 0 ? errors : null
    }
}
// создаём функции-валидаторы
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

