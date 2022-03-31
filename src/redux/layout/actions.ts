import { createAsyncThunk } from "@reduxjs/toolkit";
import { LayoutState } from "../../interfaces";
import { AppError } from "../types";

export const fetchUserFromMongo = createAsyncThunk<{layout: []}, { email: string }>(
  "layout: ",
  async ({ email }, { rejectWithValue }) => {
    const res = await fetch(
      `${process.env.BACK_END_HOST}/layout?email=${email}`
    );
    const data = await res.json();

    if (res.status < 200 || res.status >= 300) {
        return rejectWithValue({error: AppError.BAD_REQUEST});
    }
    return { layout: data.rights };
  }
);

// export const fetchLayout = createAsyncThunk<
// 	{ layout: [] }, // payload
// 	{ email: string }, // args
// 	{ rejectValue: { error: AppError } } // meta
// >(ActionType.FETCH_LAYOUT, async ({ email }, { rejectWithValue }) => {
// 	const response = await fetch(
// 		`${process.env.BACK_END_HOST}/layout?email=${email}`
// 	);
// 	if (response.status === 200) {
// 		const data = await response.json();
// 		return { layout: data.rights };
// 	}
// 	return rejectWithValue({ error: AppError.BAD_REQUEST });
// });
