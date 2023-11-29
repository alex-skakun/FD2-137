import { ValidatorFunction } from "./ValidatorFunctionType";
import { ValidatorGender } from "./ValidatortTypes";

export const nonEmptyArray: ValidatorFunction<unknown[]> = (value) => {
    return value.length ? null : { nonEmptyArray: true };
}


export const requiredText: ValidatorFunction<string> = (value) => {
    return value.trim().length ? null : { requiredText: true };
}

export const requiredAge: (minAge: number, maxAge: number) => ValidatorFunction<number> = (minAge, maxAge) => {
    return (value) => {
        debugger;
        let aa = value >= minAge && value <= maxAge ? null : { requiredAge: true };
        return value >= minAge && value <= maxAge ? null : { requiredAge: true };;
    }
}

export const requiredGender: ValidatorFunction<ValidatorGender> = (value) => {
    return value.substring(0, 1)? null : { requiredGender: true };
}

export const maxLength: (maxLength: number) => ValidatorFunction<string> = (maxLength) => {
    return (value) => {
        return value.length <= maxLength ? null : { maxLength: true }
    }
}