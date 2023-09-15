import { subgraph } from "../src";
import { expect } from "chai";

describe("Subgrapgh Testing", function () {
  it("Fetch Via HTTP", async () => {
    const result = await subgraph.queryData(subgraph.queries.getJobs(1, 0));
    expect(result).to.have.key("data");
    expect(result).to.not.have.key("error");
  });

  it("Fetch Jobs Structured Data", async () => {
    const result = await subgraph.getJobs(5, 0);
    expect(result.length).to.eq(1);
  });

  it("Fetch Executions Structured Data", async () => {
    const result = await subgraph.getExecutions(1, 0);
    expect(result.length).to.eq(1);
    console.log(result[0].data);
  });
});
