import { RootState } from "../store";
import { createSelector } from "@reduxjs/toolkit";

export const selectLayout = (state: RootState) => state.layout;

export const layoutSelector = createSelector(
  selectLayout,
  state => state
)