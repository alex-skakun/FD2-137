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

/////////////////////////////////////////////////////
class Validator {
    enabled = true;

    constructor(arrFunctions, objConfig) {
        this.mode = objConfig ? objConfig.mode : 'single';
        this.arrFunctions = arrFunctions;
    }

    //включает валидатор
    enabled() {
        this.enabled = true;
    };

    //выключает валидатор 
    disable() {
        this.enabled = false;
    };

    //переключает состояние валидатора на обратное от текущего, может принимать конкретное состояние в качестве аргумента
    toggle(value) {
        this.enabled = value === undefined ? !this.enabled : value;
    };

    //запускает валидатор, в качестве аргумента принимает тестируемое значение и возвращает `null` если значение корректное, 
    //если значение не прошло валидацию, то возвращает объект с ошибками.
    validate(testValue) {
        const result = {};

        if (this.enabled) {
            for (let func of this.arrFunctions) {
                const res = func(testValue);
                if (res !== null) {
                    result[Object.keys(res)[0]] = Object.values(res)[0];
                    if (this.mode === 'single') { break };
                }
            }
        }

        console.log(Object.keys(result).length === 0 ? null : result);
    }
}
/////////////////////////////////////////////////////

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

multiValidator.validate('');




