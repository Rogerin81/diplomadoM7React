import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/CounterSlice.js';
import productReducer from './features/product/productSlice.js';

export const store = configureStore({
  reducer: {
    counter : counterReducer,
    product : productReducer,
  },
})