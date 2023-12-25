import { validatorFunction } from "./validatorsFunction";

export const nonEmptyArray: validatorFunction<unknown[]> = (value) => {
    return value.length ? null :{ nonEmptyArray: true };
};

export const requiredText: validatorFunction<string> = (value) => {
    return value.trim().length ? null :{ requiredText: true };
};

export const maxLength: (maxLenght: number) => validatorFunction<string> = (maxLenght) => {
    return (value) => {
        return value.length <= maxLenght ? null : { maxLenght:true };
    }
};

export const requiredAge: (minAge: number, maxAge: number) => validatorFunction<number> = (minAge, maxAge) => {
    return (value) => {   
        const age =  Number(value);
        return age >= minAge && age <= maxAge ? null : { requiredAge: true };
    }
};