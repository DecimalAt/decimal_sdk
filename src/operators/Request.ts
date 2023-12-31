import { Variable } from "./Base";

type OperationType = "GET" | "POST";

/**
 * Represent HTTP Request
 */
export interface RequestOperation extends Variable {
  operation: OperationType;
  url: string;
  pathToData: string[];
}

// TODO: write function for handling each type
