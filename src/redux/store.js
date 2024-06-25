import { configureStore } from '@reduxjs/toolkit';
import conterSilce from './feature/counterSilce/conterSilce';
import productSlice from './feature/products/ProductSlice';
export const store = configureStore({
  reducer: {
    conterReducer: conterSilce,
    product: productSlice
  },
});
