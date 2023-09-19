import { expect } from "chai";
import { operators } from "../src";
import { builder } from "../src";

type singleOperation =
  | operators.MathOperation
  | operators.RandData
  | operators.RequestOperation
  | operators.StatOperation;

describe("Builder", function () {
  it("Simple Build", function () {
    let operationBuilder = new builder.Builder();
    let job_break_down: singleOperation[] = [
      { operation: "Add", a: "1.2", b: "1.3", varName: "A" },
      { operation: "Sub", a: "3.2", b: { varName: "A" }, varName: "B" },
      { operation: "Mul", a: 10, b: { varName: "A" }, varName: "C" },
      {
        operation: "POST",
        url: "http://example.com",
        pathToData: ["result", "data", "[1]"],
        varName: "post_result",
      },
      {
        operation: "Mean",
        vars: [{ varName: "post_result" }, { varName: "C" }, "1292.34234"],
        varName: "mean",
      },
      {
        operation: "randomNumber",
        varName: "rand_num",
      },
      {
        operation: "Add",
        a: { varName: "rand_num" },
        b: { varName: "mean" },
        varName: "result",
      },
    ];

    job_break_down.forEach((element) => {
      operationBuilder.addOperation(element);
    });

    const job = operationBuilder.build();
    expect(job.length).eq(job_break_down.length);
  });

  it("Should Fail: for unknown variable", function () {
    let operationBuilder = new builder.Builder();
    let job_break_down: singleOperation[] = [
      { operation: "Add", a: "2.1", b: "22.22", varName: "A" },
      { operation: "Sub", a: "123.121", b: { varName: "C" }, varName: "X" },
    ];

    operationBuilder.addOperation(job_break_down[0]);
    expect(() => operationBuilder.addOperation(job_break_down[1])).to.throw(
      Error,
      "b is not present in the store",
    );
  });

  it("Add Operations Sequentially", function () {
    let operation1: operators.MathOperation = {
      operation: "Add",
      a: "2.1",
      b: "22.22",
      varName: "A",
    };

    let operation2: operators.MathOperation = {
      operation: "Sub",
      a: "3.2",
      b: { varName: "A" },
      varName: "B",
    };

    const operationBuilder = new builder.Builder();
    operationBuilder.addOperation(operation1).addOperation(operation2);
  });
});
