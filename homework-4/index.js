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


class Validator {
    validators; // array 
    config;     // object
    enabled;    // boolean

    constructor(validators, config) {
        this.validators = validators;
        if (config === undefined) {
            this.config = { mode: 'single' };
        } else {
            this.config = config;
        }
        this.enabled = true;
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

    // в цикл for сделать проверку по config (конфигуратор) 
    validate(value) {
        if (this.enabled === false) {
            return null; // значение валидно
        }

        let result = [];
        // проходим по массиву с функциями-валидаторами и получаем результат их работы
        for (let i = 0; i < this.validators.length; i++) {
            let currentValidator = this.validators[i];
            let validationResult = currentValidator(value);
            // если валидация не проходит, то результат мы собираем в массив
            if (validationResult !== null) {
                result.push(validationResult);
            }
            //если config mode is single и в массиве есть хотя бы одна ошибка
            //то прекращаем выполнение -> break
            if (this.config.mode === 'single' && result.length === 1) {
                break;
            }
        }

        // массив с найденными ошибками валидации преобразуем в объект
        if (result.length > 0) {
            let error = {};
            result.forEach(function (item) {
                for (const property in item) {
                    // собираем свойства или ключи из всех объектов 
                    // в ОДИН большой объект, в котором будет несколько ключей
                    error[property] = item[property];
                }
            });

            return error;
        }

        return null;
    }
}

/********************************************************************************* */

// создаем экземпляр класса
const validator = new Validator([
    required,
    minLength(5),
    maxLength(25),
], { mode: 'multi' });

let valid = validator.validate('');
console.log(valid);
validator.disable();

const res = validator.validate('mama'); 
console.log(res);
