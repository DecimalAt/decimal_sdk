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

export const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

import { getJobs, getExecutions } from "./queries";
import { Execution, Job } from "./types";
import { convertToExecution, convertToJob } from "./helper";

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
