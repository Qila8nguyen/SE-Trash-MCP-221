import { createAsyncThunk } from "@reduxjs/toolkit";
import { ActionType, AppError } from "../types";

export const fetchLayout = createAsyncThunk<
	{ layout: [] }, // payload
	{ email: string }, // args
	{ rejectValue: { error: AppError } } // meta
>(ActionType.FETCH_LAYOUT, async ({ email }, { rejectWithValue }) => {
	const response = await fetch(
		`${process.env.BACK_END_HOST}/layout?email=${email}`
	);
	if (response.status === 200) {
		const data = await response.json();
		return { layout: data.rights };
	}
	return rejectWithValue({ error: AppError.BAD_REQUEST });
});
