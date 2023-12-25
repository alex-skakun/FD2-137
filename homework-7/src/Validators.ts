import { ValidatorFunction } from "./ValidatorFunction";

export const requiredText: ValidatorFunction<string> = (value) =>{
    return value.trim().length ? null : {requiredText: "поле обязательно для заполнения."};
}

export const validAgeMin: ValidatorFunction<string> = (value) =>{
    const age = Number(value.replace(/,/g, '.'));
    return age >= 0 ? null : {validAge: "Значение ниже допустимого."};
}

export const validAgeMax: ValidatorFunction<string> = (value) =>{
    const age = Number(value.replace(/,/g, '.'));
    return age <= 150 ? null : {validAge: "Значение выше допустимого."};
}

export const requiredNumber: ValidatorFunction<string> = (value) =>{
    return !isNaN(Number(value.replace(/,/g, '.'))) ? null : {requiredNumber: "Значение должно быть числовым"};
}

// export const nonEmptyArray: ValidatorFunction<unknown[]> = (value) =>{
//     return value.length ? null : {nonEmptyArray: true};
// }

// export const maxLength: (maxLength: number) => ValidatorFunction<string> = (maxLength) => {
//     return(value) => {
//         return value.length <= maxLength ? null : {maxLength: true};
//     }

// }