import { BigNumberish } from "ethers";

import {
  StatOperation,
  MathOperation,
  MathSingleOperation,
  RandData,
  RequestOperation,
  Variable,
} from "../operators";
import BigNumber from "bignumber.js";

export const name = (): string => {
  return "Builder";
};

type operation =
  | StatOperation
  | MathOperation
  | MathSingleOperation
  | RandData
  | RequestOperation;

export class Builder {
  private operations: operation[] = [];

  private varMap: Map<string, operation>;

  constructor() {
    this.varMap = new Map();
  }

  addOperation(op: operation): Builder {
    if (this.varMap.has(op.varName)) {
      throw new Error(`${op.varName} already exists`);
    }
    op = this.verify(op);
    this.varMap.set(op.varName, op);
    this.operations.push(op);
    return this;
  }

  build(): operation[] {
    return this.operations;
  }

  private verify(op: operation): operation {
    switch (op.operation) {
      case "Add":
      case "Sub":
      case "Mul":
      case "Div":
      case "Pow":
        if (
          this.isVariable(op.b) &&
          !this.isVariablePresentInStore(op.b as Variable)
        ) {
          throw new Error("b is not present in the store");
        }
        if (!this.isVariable(op.b) && BigNumber.isBigNumber(op.b)) {
          throw new Error("b is not a valid bignumber");
        }
      case "Abs":
      case "Negate":
        if (
          this.isVariable(op.a) &&
          !this.isVariablePresentInStore(op.a as Variable)
        ) {
          throw new Error("a is not present in store");
        }

        if (!this.isVariable(op.a) && BigNumber.isBigNumber(op.a)) {
          throw new Error("a is not a valid bignumber");
        }
        break;
      case "GET":
      case "POST":
        // only url's can be validated here
        break;

      case "Mean":
      case "Variance":
        const allVars = op.vars;
        for (let index = 0; index < allVars.length; index++) {
          const element = allVars[index];
          if (
            this.isVariable(element) &&
            !this.isVariablePresentInStore(element as Variable)
          ) {
            throw new Error("element is not present in store");
          }

          if (!this.isVariable(element) && BigNumber.isBigNumber(element)) {
            throw new Error("element is not a valid bignumber");
          }
        }
        break;

      case "randomNumber":
      case "randomString":
        break;
      default:
        throw new Error(`Unhandled operation ${op.operation}`);
    }

    return op;
  }

  private isVariablePresentInStore(a: Variable): boolean {
    return this.varMap.has(a.varName);
  }

  private isVariable(data: any): boolean {
    return typeof data === "object" && "varName" in data;
  }
}
