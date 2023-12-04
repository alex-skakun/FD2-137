import { validatorFunction } from "./validatorFunction";

export const nonEmptyArray: validatorFunction<string> = (value) => {
    console.log('Value:', value);
    const isValid = value.length > 0;
    console.log('IsValid:', isValid);
    return isValid ? null : { nonEmptyArray: true };
};

export const requiredText: validatorFunction<string> = (value) => {
    console.log('Value:', value);
    const isValid = value.trim().length > 0;
    console.log('IsValid:', isValid);
    return isValid ? null : { requiredText: true };
};

export const validAge: validatorFunction<number> = (value) => {
    console.log('Value:', value);
    const isValid = value >= 0 && value <= 150;
    console.log('IsValid:', isValid);
    return isValid ? null : { validAge: true };
};