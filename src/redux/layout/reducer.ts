import { createReducer } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { Layout } from "../../interfaces";
import { AppError } from "../types";
import { fetchLayout } from "./actions";

type LayoutState = {
	loading: boolean;
	error: AppError;
	data: Layout;
};

const initialState: LayoutState = {
	loading: false,
	error: AppError.NO_ERROR,
	data: [],
};

export const layoutReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(fetchLayout.pending, (state) => {
			state.loading = true;
			state.error = null;
		})
		.addCase(fetchLayout.fulfilled, (state, action) => {
			state.loading = false;
			state.error = null;
			state.data = action.payload.layout;
		})
		.addCase(fetchLayout.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload.error;
		})
    .addCase(HYDRATE, (state, action) => {
      return {
        ...state,
        ...action.payload.layout,
      }
    });
});
