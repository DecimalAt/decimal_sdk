import { operators } from "../src";

type singleOperation =
  | operators.MathOperation
  | operators.RandData
  | operators.RequestOperation
  | operators.StatOperation;

describe("Simple Operator Logs", function () {
  it("Print Operations", function () {
    const job: singleOperation[] = [
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

    console.log(JSON.stringify(job, null, 4));
  });
});
