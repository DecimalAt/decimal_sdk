import { Variable } from "./Base";

type Data = "randomString" | "randomNumber" | "randomBytes";

/**
 * Represents a rand operation
 * This is used to add random data in the job
 */
export interface RandData extends Variable {
  operation: Data;
}

// TODO: write function for handling each type
