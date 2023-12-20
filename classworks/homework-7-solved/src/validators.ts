import { ValidatorFunction } from './ValidatorFunction';
import { isEmptyInputValue } from './isEmptyInputValue';

export const nonEmptyArray: ValidatorFunction<unknown[]> = (value) => {
  return value.length ? null : { nonEmptyArray: true };
};

export const requiredText: ValidatorFunction<unknown> = (value) => {
  return isEmptyInputValue(value) ? { requiredText: true } : null;
};

export const maxLength: (maxLength: number) => ValidatorFunction<string> = (maxLength) => {
  return (value) => {
    if (!value) {
      return null;
    }

    return value.length <= maxLength ? null : {
      maxLength: {
        limitLength: maxLength,
        actualLength: value.length
      },
    };
  };
};

export const max: (maxValue: number) => ValidatorFunction<number> = (maxValue) => {
  return (value) => {
    if (!value) {
      return null;
    }

    return Number(value) <= maxValue ? null : { max: true };
  };
};

export const min: (minValue: number) => ValidatorFunction<number> = (minValue) => {
  return (value) => {
    if (!value) {
      return null;
    }

    return Number(value) >= minValue ? null : { min: true };
  };
};

export const exactValues: (allowedValues: string[]) => ValidatorFunction<string> = (allowedValues) => {
  return (value) => {
    if (!value) {
      return null;
    }

    return allowedValues.includes(value) ? null : { exactValues: true };
  };
};
