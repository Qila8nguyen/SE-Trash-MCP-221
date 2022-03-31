import { createReducer} from '@reduxjs/toolkit';
import { fetchUserFromMongo } from '.';
import { LayoutState } from './store';
import {createWrapper, Context, HYDRATE} from 'next-redux-wrapper';


const initialState: LayoutState = {
    error: false, 
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
        state.error = true;
    })
    .addCase(HYDRATE, (state) => {
        
    })
    
});

export default layoutReducer;