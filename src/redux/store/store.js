import { configureStore } from '@reduxjs/toolkit'
import loadingReducer from '../reducers/loadingReducer'

const store = configureStore({ reducer: loadingReducer })

console.log(store.getState())