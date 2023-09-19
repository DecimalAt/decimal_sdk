import { subgraph } from "../src";
import { expect } from "chai";

describe("Subgrapgh Testing", function () {
  it("Fetch Via HTTP", async () => {
    const result = await subgraph.queryData(subgraph.queries.getJobs(1, 0));
    expect(result).to.have.key("data");
    expect(result).to.not.have.key("error");
  });

  it("All Jobs", async () => {
    const result = await subgraph.getJobs(1, 0);
    expect(result.length).to.eq(1);
  });

  it("All Feeds", async () => {
    const result = await subgraph.getExecutions(1, 0);
    expect(result.length).to.eq(1);
  });

  it("Apollo Client: get jobs", async () => {
    const apolloClient = subgraph.apollo.apolloClient;

    // any instance of apolloClient created outside can be passed here to fetch result
    const result = await subgraph.apollo.GET_JOBS(apolloClient, 1, 0);
    const httpResult = await subgraph.getJobs(1, 0);

    expect(result).to.deep.equal(httpResult);
    // console to see the result
  });

  it("Apollo Client: get executions", async () => {
    const apolloClient = subgraph.apollo.apolloClient;

    // any instance of apolloClient created outside can be passed here to fetch result
    const result = await subgraph.apollo.GET_EXECUTIONS(apolloClient, 1, 0);
    const httpResult = await subgraph.getExecutions(1, 0);

    expect(result).to.deep.equal(httpResult);
    // console to see the result
  });
});
