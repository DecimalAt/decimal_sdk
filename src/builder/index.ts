import {
  StatOperation,
  MathOperation,
  RandData,
  RequestOperation,
} from "../operators";

export const name = (): string => {
  return "Builder";
};

type operation = StatOperation | MathOperation | RandData | RequestOperation;

export class Builder {
  private operations: operation[] = [];

  addOperation(op: operation): Builder {
    this.operations.push(op);
    return this;
  }

  build(): operation[] {
    // check the syntax once before returning the job
    return this.operations;
  }
}
