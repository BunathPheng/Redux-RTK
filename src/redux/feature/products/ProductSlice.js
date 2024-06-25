import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Base_Url } from "../../api";
const initialState = {
  products :[],
  singleproduct :{},
  // idle -> |pending| fulfill |rejected
  status  :  "idle",
  error : null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(`${Base_Url}products/?page=20`);
    const data = await response.json();
    console.log("data", data.results);
    return data.results;
  }
)
export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id) => {
    const response = await fetch(`${Base_Url}products/${id}`);
    const data = await response.json();
    console.log("data", data);
    return data;
  }
)
 export const productSlice = createSlice(
  {
     name : "products",
     initialState,
     reducers :{},
     extraReducers: (builder) =>{
       builder
       .addCase(fetchProducts.pending, (state) => {
         state.status = "loading";
       })
       .addCase(fetchProducts.fulfilled, (state, action) => {
         state.status = "sucessful";
         state.products = action.payload;
       })
       .addCase(fetchProducts.rejected, (state, action) => {
         state.status = "failed";
         state.error = action.error.message;
       })
       .addCase(fetchProductById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = "sucessful";
        state.singleproduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
     }
  }
 )

 //export reducer
 export default productSlice.reducer;
// export product
export const selectAllProducts = ((state) => state.product.products);
export const selectSingleProduct = ((state) => state.product.singleproduct);