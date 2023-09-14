import fetch from "cross-fetch";
import { JobStatus, type Job, Execution, JobType, Network } from "./types";

export const name = (): string => {
  return "Subgraph";
};

import * as query from "./queries";
import BigNumber from "bignumber.js";

export async function queryData(query: string): Promise<any> {
  const endPoint =
    "https://api.thegraph.com/subgraphs/name/decimalat/decimal-testnet";

  const response = await fetch(endPoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error("Subgraph response was not OK");
  }

  const data = await response.json();
  return data;
}

export async function getJobs(first: number, skip: number): Promise<Job[]> {
  const result = await queryData(query.getJobs(first, skip));

  const data = result.data.jobs as any[];

  const toReturn: Job[] = data.map((val) => {
    return {
      id: val.id,
      network: Network.ArbitrumGoerli,
      type: JobType.Price,
      rewardLeft: new BigNumber("123123").div(100),
      rewardPerExecution: new BigNumber(val.paymentPerExecution).div(10),
      status: JobStatus.Ready,
      runsLeft: 10,
      timeLeft: 1231,
    };
  });

  return toReturn;
}

export async function getExecutions(
  first: number,
  skip: number,
): Promise<Execution[]> {
  const result = await queryData(query.getExecutions(first, skip));
  const data = result.data.executions as any[];

  const toReturn: Execution[] = data.map((val) => {
    return {
      id: val.id,
      jobId: val.job.id,
      network: Network.ArbitrumGoerli,
      category: JobType.Price,
      data: () => ["to compute data"],
      lastUpdated: 123123,
      transactionHash: val.txHash,
      creator: val.job.creator,
      executor: val.executor,
    };
  });

  return toReturn;
}

export const queries = query;
