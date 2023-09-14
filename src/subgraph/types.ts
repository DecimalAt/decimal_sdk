import { BigNumber } from "bignumber.js";

export enum JobStatus {
  Ready = "Ready",
  Running = "Running",
  Stopped = "Stopped",
  Active = "Active",
}

export enum JobType {
  Price = "Price",
}

export enum Network {
  ArbitrumGoerli = "Arbitrum-Goerli",
}

export interface Job {
  id: String;
  network: Network;
  type: JobType;
  rewardLeft: BigNumber;
  rewardPerExecution: BigNumber;
  status: JobStatus;
  runsLeft: number;
  timeLeft: number; // in millisecond
}

export interface Execution {
  id: String;
  jobId: String;
  network: Network;
  category: JobType;
  data: () => string[];
  lastUpdated: number;
  transactionHash: string;
  creator: string;
  executor: string;
}
