import { createReducer} from '@reduxjs/toolkit';
import { fetchUserFromMongo } from '.';
import { LayoutState } from '../../interfaces';
import {HYDRATE} from 'next-redux-wrapper';
import { ActionType, AppError } from '../types';


const initialState: LayoutState = {
    error: AppError.NO_ERROR, 
    pending: false,
    layout: [],
};

const layoutReducer = createReducer(initialState, builder => {
    builder
    .addCase(fetchUserFromMongo.pending, state => {
        state.pending = true;
    })
    .addCase(fetchUserFromMongo.fulfilled, (state, {payload}) => {
        console.log("Success fetching");
        state.pending = false;
        state.layout = payload.layout;
    })
    .addCase(fetchUserFromMongo.rejected, state => {
        state.pending = false;
        state.error = AppError.UNAUTHORIZED,
        state.layout = [];
    })
    .addCase(HYDRATE, (state) => {
        return {
            ...state,
        }
    })
    
});

export default layoutReducer;
