import { ValidatorFunction } from "./ValidatorFunction";

export type FormValodatorConfiguration<Data extends object> = {
  [Property in keyof Data]?: ValidatorFunction<Data[Property]>[];
};
