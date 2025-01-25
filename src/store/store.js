import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/CounterSlice.js';
import productReducer from './features/product/productSlice.js';
import formReducer from './form/formSlice.js';

export const store = configureStore({
  reducer: {
    counter : counterReducer,
    product : productReducer,
    form : formReducer,
  },
})