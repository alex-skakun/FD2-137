import { FormValidatorConfiguration } from "./FormValidatorConfiguration";
import { ValidatorFunction } from "./ValidatorFunction";
import { conposeValidators } from "./conposeValidators";
import { ValidatorResult } from "./ValidatorResult";


export type FormValidateResult <Data extends object> = Partial<{
    [p in keyof Data]: NonNullable<ValidatorResult>;
}>;


export class FormValidator<Data extends object> {
    readonly #validationMap: Map<string, ValidatorFunction<unknown>>;
    
    constructor(configuration: FormValidatorConfiguration<Data>) {
        this.#validationMap = new Map();
        
        for (const [key, value] of Object.entries(configuration)) {
            this.#validationMap.set(
                key,
                Array.isArray(value)
                ? conposeValidators(...value as ValidatorFunction<unknown>[])
                : value as ValidatorFunction<unknown>,
                );
        }
    }

    validate(data: Data): FormValidateResult<Data> | null  {
        const errors: FormValidateResult<Data>[] = [];

        for (const [propertyName, value] of Object.entries(data)) {
            const validator = this.#validationMap.get(propertyName);

            if (validator) {
                const result = validator(value);

                if (result){

                    errors.push({[propertyName]:  result} as FormValidateResult<Data>);
                }
            }
        }
        return errors.length ? Object.assign({}, ...errors) : null;
    }
}