import { createSlice } from "@reduxjs/toolkit";
const initialState = 
{
   values : 0,
}
export const conterSlice = createSlice({
  name : "count",
  initialState,
  reducers : {
    increment : (state) => {
      state.values += 1;
    },
    decrement : (state) => {
      state.values -= 1;
    },
    incrementByAmount : (state,action) => {
      state.values += action.payload;
    },
  },
})
//export actions in reducers 
export const {increment,decrement,incrementByAmount} = conterSlice.actions;
export default conterSlice.reducer;
 