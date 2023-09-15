import fetch from "cross-fetch";
import {
  JobStatus,
  type Job,
  Execution,
  JobType,
  Network,
  Param,
} from "./types";

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

function getJobType(params: Param[]): JobType {
  const job_params = params.filter((a) => a.index === -1);

  const type_param = job_params.filter((a) => a.key === "type");

  if (type_param.length === 0) return JobType.Unknown;

  return type_param[0].value === "priceFeed" ? JobType.Price : JobType.Unknown;
}

export async function getJobs(first: number, skip: number): Promise<Job[]> {
  const result = await queryData(query.getJobs(first, skip));

  const data = result.data.jobs as any[];

  const toReturn: Job[] = data.map((val) => {
    const params_raw = val.params as any[];
    const params: Param[] = params_raw.map((a) => {
      return {
        id: a.id,
        index: parseInt(a.index),
        key: a.key,
        value: a.value,
      };
    });

    return {
      id: val.id,
      network: Network.ArbitrumGoerli,
      type: getJobType(params),
      rewardLeft: new BigNumber("123123").div(100),
      rewardPerExecution: new BigNumber(val.paymentPerExecution).div(10),
      status: JobStatus.Ready,
      runsLeft: 10,
      timeLeft: 1231,
      param: params,
    };
  });

  return toReturn;
}

function formatData(jobType: JobType, params: Param[], data: string): string[] {
  if (jobType === JobType.Price) {
    const dataParams = params.filter((a) => a.index === 0);

    const token0Param = dataParams.filter((a) => a.key === "token0");
    const token1Param = dataParams.filter((a) => a.key === "token1");

    let token0Name = token0Param.length > 0 ? token0Param[0].value : "token0";
    let token1Name = token1Param.length > 0 ? token1Param[0].value : "token1";

    let price = new BigNumber(data);
    let priceInverse = new BigNumber(1).div(price);

    let zeroToOne = `${token0Name}/${token1Name}: ${price.toFixed()}`;
    let oneToZero = `${token1Name}/${token0Name}: ${priceInverse.toFixed()}`;

    return [zeroToOne, oneToZero];
  }

  return ["Data format not available for given job type"];
}

export async function getExecutions(
  first: number,
  skip: number,
): Promise<Execution[]> {
  const result = await queryData(query.getExecutions(first, skip));
  const data = result.data.executions as any[];

  const toReturn: Execution[] = data.map((val) => {
    const params_raw = val.job.params as any[];

    const params: Param[] = params_raw.map((a) => {
      return {
        id: a.id,
        index: parseInt(a.index),
        key: a.key,
        value: a.value,
      };
    });

    const category = getJobType(params);
    return {
      id: val.id,
      jobId: val.job.id,
      network: Network.ArbitrumGoerli,
      category,
      data: formatData(category, params, val.data),
      lastUpdated: new BigNumber(val.timestamp).toNumber(),
      transactionHash: val.txHash,
      creator: val.job.creator,
      executor: val.executor,
    };
  });

  return toReturn;
}

export const queries = query;
