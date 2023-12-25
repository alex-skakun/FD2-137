import { ValidatorFunction } from './ValidatorFunction';
import { ValidatorResult } from './ValidatorResult';
import { requiredText } from './validators';

export function conposeValidators<T>(
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

const requiredFio = conposeValidators(requiredText, (value) =>
  value.length <= 50 ? null : { maxLength: true }
);
