import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { layoutReducer } from "./layout";

export const store = configureStore({
	reducer: {
		layout: layoutReducer,
	},
	devTools: process.env.NODE_ENV !== "production",
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
export const wrapper = createWrapper(() => store);
