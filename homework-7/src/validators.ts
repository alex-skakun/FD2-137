import { ValidatorFunction } from "./ValidatorFunction";

const MIN_AGE = 0;
const MAX_AGE = 150;


export const requiredText: ValidatorFunction<string> = (value) => {
    return value.trim().length ? null : { requiredText: true}
}

export const requiredNumber: ValidatorFunction<number> = (value) => {
    return !isNaN(value) ? null : {requiredNumber: true}
}

export const minAge: ValidatorFunction<number> = (value) => {
    return value > MIN_AGE ? null : {minAge: true}  
}

export const maxAge: ValidatorFunction<number> = (value) => {
    return value < MAX_AGE ? null : {maxAge: true}
}
