import { ValidatorFunction } from "./ValidatorFunctionType";

// сопоставляем фалидируемум полю функцию-валидатор
export type FormValidatorConfiguration<T extends object> = {
    [Property in keyof T]?: ValidatorFunction<T[Property]>[]
}