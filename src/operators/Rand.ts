import { Variable } from "./Base";

type Data = "randomString" | "randomNumber" | "randomBytes";

export interface RandData extends Variable {
  operation: Data;
}

// TODO: write function for handling each type
