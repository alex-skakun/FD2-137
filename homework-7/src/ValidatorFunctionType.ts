import { ValidatorResult } from "./ValidatortTypes";

export interface ValidatorFunction<Value> {
     (value: Value): null | ValidatorResult;
}

