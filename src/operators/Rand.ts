import { Variable } from "./Base";

type Data = "randomString" | "randomNumber";

export interface RandData extends Variable {
  operation: Data;
}

// TODO: write function for handling each type
