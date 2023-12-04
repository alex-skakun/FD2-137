import { validatorFunction } from "./validatorFunction";
import { validatorResult } from "./validatorsResult";

export function composeValidators<T>(...validators: validatorFunction<T>[]): validatorFunction<T> {
    return (value: T): validatorResult => {
        for (const validator of validators) {
            const result = validator(value);

            if (result) {
                return result;
            }
        }

        return null;
    };
}