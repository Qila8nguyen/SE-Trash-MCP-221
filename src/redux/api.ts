import { Layout } from "../interfaces";
import { makeApiCaller } from "../utils/fetch";

import { AppError } from "./types";
import { parseLayout } from "./utils";

export const getLayout = makeApiCaller<{ email: string }, { data: Layout }>(
	"GET",
	"/layout",
	(res) => {
    return {
      status: "ok",
      body: {
        data: parseLayout(res),
      },
    };
  },
  err => {
    return {
      status: "error",
      error: AppError.BAD_REQUEST,
    };
  }
);