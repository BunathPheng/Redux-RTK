import { configureStore } from '@reduxjs/toolkit'
import conterSilce from './feature/conterSilce'
export const store = configureStore({
  reducer: {
    conterReducer: conterSilce
  },
})
