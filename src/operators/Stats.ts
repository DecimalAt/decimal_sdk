import { BigNumberish } from "ethers";
import { Variable } from "./Base";

type OperationType = "Mean" | "Variance";
type Var = Variable | BigNumberish;

export interface StatOperation extends Variable {
  operation: OperationType;
  vars: Var[];
}
