import { ValidatorFunction, requiredText } from "./ValidatorFunction";
import { ValidatorResult } from "./ValidatorResult";

export function composeValidator<T>(
  ...validators: ValidatorFunction<T>[]
): ValidatorFunction<T> {
  return (value: T): ValidatorResult => {
    for (const validator of validators) {
      const result = validator(value);

      if (result) {
        return result;
      }
    }
    return null;
  };
}

const requiredFio = composeValidator(requiredText, (value) =>
  value.length <= 50 ? null : { maxLength: true }
);


