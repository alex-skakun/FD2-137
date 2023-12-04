export type validatorResult = null | Record<string, true>;
export interface validatorFunction<Value> {
    (value: Value): validatorResult;
}