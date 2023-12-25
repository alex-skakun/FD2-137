import { composeValidators } from "./composeValidators";
import { formValidatorConfiguration } from "./formValidatorsConfiguration";
import { validatorFunction } from "./validatorsFunction";
import { validatorResult } from "./validatorsResult";

export type FormValidateResult<Data extends object> = Partial<{
    [P in keyof Data]: NonNullable<validatorResult>;
}>;

export class formValidator<Data extends object> {
    readonly #validationMap: Map<string, validatorFunction<unknown>>;

    constructor(configuration: formValidatorConfiguration<Data>) {
        this.#validationMap = new Map();

        for (const [key, value] of Object.entries(configuration)) {
            this.#validationMap.set(key, composeValidators(...value as validatorFunction<unknown>[]));
        };
    };

    validate(data: Data): FormValidateResult<Data> | null {
        const errors: FormValidateResult<Data>[] = [];

        for (const [propertyName, value] of Object.entries(data)) {
            const validator = this.#validationMap.get(propertyName);

            if (validator) {
                const result = validator(value);

                let mistaken = document.getElementById(`error-${propertyName}`);

                if (result) {
                    errors.push({ [propertyName]: result } as FormValidateResult<Data>);
                    if (mistaken) {
                        mistaken.style.visibility = 'visible';
                    };
                } else {
                    if (mistaken) {
                        mistaken.style.visibility = 'hidden';
                    };
                };
            };
        };

        return errors.length ? Object.assign({}, ...errors) : null;
    };
};