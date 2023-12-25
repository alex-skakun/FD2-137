import { ValidatorFunction } from "./ValidatorFunction";

export const nonEmptyArray: ValidatorFunction<unknown[]> = (value) => {
    return value.length ? null : { nonEmptyArray: true };
};

export const requiredText: ValidatorFunction<string> = (value) => {
    return value.trim().length ? null : { requiredText: true };
};

export const minAllowedValue: (min: number) => ValidatorFunction<number> = (min) => {
    return (value) => {
        return value >= min ? null : {
            minAllowedValue: {
                limitValue: min,
            }
        };
    };
};

export const maxLength: (maxLength: number) => ValidatorFunction<string> = (maxLength) => {
    return (value) => {
        return value.length <= maxLength ? null : {
            maxLength: {
                limitLength: maxLength,
            }
        };
    }
}

export const minLength: (minLength: number) => ValidatorFunction<string> = (minLength) => {
    return (value) => {
        return value.length >= minLength ? null : {
            minLength: {
                limitLength: minLength,
            }
        };
    }
}

export const validNumber: ValidatorFunction<number> = (value: number) => {
    return value === 0 ? { validNumber: true } : null;
}

export const minAllowedNumber: (minValue: number) => ValidatorFunction<number> = (minValue) => {
    return (value) => {
        return value < minValue ? {
            minAllowedNumber: {
                limitValue: minValue
            }
        } : null;
    }
}

export const maxAllowedNumber: (maxValue: number) => ValidatorFunction<number> = (maxValue) => {
    return (value) => {
        return value > maxValue ? {
            maxAllowedNumber: {
                limitValue: maxValue
            }
        } : null;
    }
}
