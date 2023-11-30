import { ValidatorFunction } from "./ValidatorFunctionType";
import { Gender } from "./ValidatortTypes";

export const nonEmptyArray: ValidatorFunction<unknown[]> = (value) => {
    return value.length ? null : { nonEmptyArray: true };
}


export const requiredText: ValidatorFunction<string> = (value) => {
    return value.trim().length ? null : { requiredText: true };
}

export const requiredAge: (minAge: number, maxAge: number) => ValidatorFunction<number> = (minAge, maxAge) => {
    return (value) => {    
        return value >= minAge && value <= maxAge ? null : { requiredAge: true };;
    }
}

// export const requiredGender: ValidatorFunction<string> = (value) => {
//     return Gender.indexOf(value.substring(0, 1)) > 0? null : { requiredGender: true };
// }

export const maxLength: (maxLength: number) => ValidatorFunction<string> = (maxLength) => {
    return (value) => {
        return value.length <= maxLength ? null : { maxLength: true }
    }
}