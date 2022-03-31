import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store'

export const selectLayout = (state: RootState) => state.layout;

export const layoutSelector = createSelector(selectLayout, state => state);