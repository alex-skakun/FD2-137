import { validatorResult } from "./validatorsResult";

export interface validatorFunction<Value> {
    (value: Value): validatorResult;
};