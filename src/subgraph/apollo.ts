import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  gql,
  NormalizedCacheObject,
} from "@apollo/client/core";

const link = new HttpLink({
  uri: "https://api.thegraph.com/subgraphs/name/decimalat/decimal-testnet",
});

/**
 * Sample instance of apollo client
 * This instance connect to decimal testnet subgraph with InMemoryCache
 */
export const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

import { getJobs, getExecutions } from "./queries";
import { Execution, Job } from "./types";
import { convertToExecution, convertToJob } from "./helper";

/**
 * Get all available jobs
 * @param aplClient - Any instance of apollo client
 * @param first - number of jobs to fetch
 * @param skip - number of jobs to skip (pagination)
 * @return Jobs - List of Jobs
 */
export const GET_JOBS = async (
  aplClient: ApolloClient<NormalizedCacheObject>,
  first: number,
  skip: number,
): Promise<Job[]> => {
  const query = gql`
    ${getJobs(first, skip)}
  `;

  const result = await aplClient.query({ query });
  return convertToJob(result.data.jobs as any[]);
};

/**
 * Get all executions
 * @param aplClient - Any instance of apollo client
 * @param first - number of executions to fetch
 * @param skip - number of executions to skip (pagination)
 * @return Execution - List of Executions
 */
export const GET_EXECUTIONS = async (
  aplClient: ApolloClient<NormalizedCacheObject>,
  first: number,
  skip: number,
): Promise<Execution[]> => {
  const query = gql`
    ${getExecutions(first, skip)}
  `;

  const result = await aplClient.query({ query });
  return convertToExecution(result.data.executions as any[]);
};
