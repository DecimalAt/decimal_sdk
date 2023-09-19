import fetch from "cross-fetch";
import { type Job, Execution } from "./types";

export const name = (): string => {
  return "Subgraph";
};

import * as query from "./queries";
export * as apollo from "./apollo";

import { convertToExecution, convertToJob } from "./helper";

/**
 * Execute a graphql query
 * @param query - query
 * @returns result
 */
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

/**
 * Get all available jobs
 * @param first - number of jobs to fetch
 * @param skip - number of jobs to skip (pagination)
 * @return Jobs - List of Jobs
 */
export async function getJobs(first: number, skip: number): Promise<Job[]> {
  const result = await queryData(query.getJobs(first, skip));

  const data = result.data.jobs as any[];

  return convertToJob(data);
}

/**
 * Get all executions
 * @param first - number of executions to fetch
 * @param skip - number of executions to skip (pagination)
 * @return Execution - List of Executions
 */
export async function getExecutions(
  first: number,
  skip: number,
): Promise<Execution[]> {
  const result = await queryData(query.getExecutions(first, skip));
  const data = result.data.executions as any[];

  return convertToExecution(data);
}

/**
 * All pre-defined queries
 */
export const queries = query;
