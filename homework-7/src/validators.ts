import { validatorFunction } from "./validatorFunction";

export const requiredText: validatorFunction<string> = (value) => {
    return value.trim().length ? null : { requiredText: true };
};

export const requiredAge: (minAge: number, maxAge: number) => validatorFunction<number> = (minAge, maxAge) => {
    return (value) => {
        const age = Number(value);
        return age >= minAge && age <= maxAge ? null : { requiredAge: true };
    };
};

export const nonEmptyArray: validatorFunction<string> = (value) => {
    return value.length ? null : { nonEmptyArray: true };
};