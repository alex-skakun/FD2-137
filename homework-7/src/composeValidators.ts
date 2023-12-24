import { ValidatorFunction} from "./ValidatorFunctionType";
import { ValidatorResult } from "./ValidatortTypes";

export function composeValidators<T>(...validators: ValidatorFunction<T>[]): ValidatorFunction<T> {
    return (value: T): ValidatorResult => {
        for (const validator of validators) {
            const result = validator(value);

            if (result) { 
                return result;
            }
        }

        return null;
    }

}


// пример применения
// const requiredFio = composeValidators(
//     requiredText,
//     (value) => value.length <= 50 ? null : { maxLength: true },
// )

// использование requiredFio('1safag');