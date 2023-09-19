import { BigNumberish } from "ethers";
import { Variable } from "./Base";

type OperationType = "Mean" | "Variance";
type Var = Variable | BigNumberish;

/**
 * Represent Stat Operation
 * This is used for operation on multiple data points at same time
 */
export interface StatOperation extends Variable {
  operation: OperationType;
  vars: Var[];
}
