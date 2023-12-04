import { ValidatorFunction} from "./ValidatorFunction";

export const nonEmptyArray: ValidatorFunction <unknown[]> = (value) => {
    return value.length ? null : { nonEmptyArray: true }
}

export const requiredText: ValidatorFunction <string> = (value) => {
    return value.trim().length ? null : { requiredText: true }
}

export const maxLength: (maxLength: number) => ValidatorFunction<string> = (maxLength) => {
    return (value) => {
        return value.length <= maxLength ? null : { maxLength: true };
    }
}

export const requiredAge: (maxAge: number, minAge: number) => ValidatorFunction <number> = (maxAge, minAge) => {
    return (value) => {
        return Number(value) > minAge && Number(value) < maxAge ? null : { requiredAge: true }
    }
}



