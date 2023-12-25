import { validatorFunction } from "./validatorsFunction";

export type formValidatorConfiguration<T extends object> = {
    [Property in keyof T]?: validatorFunction<T[Property]>[];
};