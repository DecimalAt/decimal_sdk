import { BigNumberish } from "ethers";
import { Variable } from "./Base";

type OperationType = "Add" | "Sub" | "Mul" | "Div" | "Pow";

export interface MathOperation extends Variable {
  operation: OperationType;
  a: Variable | BigNumberish;
  b: Variable | BigNumberish;
}

type SingleOperation = "Abs" | "Negate";

export interface MathSingleOperation extends Variable {
  operation: SingleOperation;
  a: Variable | BigNumberish;
}
// TODO: write function for handling each type
