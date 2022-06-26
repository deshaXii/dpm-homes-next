import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { updateWishlist } from "../api/wishlistAPI";

const initialState = {
  
};

export const addPropertyToWishlist = createAsyncThunk("wishlist/update-wishlist", async (id) => {
  const responseData = await updateWishlist(id);
  return responseData;
});

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addPropertyToWishlist.fulfilled, (state, action) => {
        
      })
      .addCase(HYDRATE, (state, action) => {
        const nextState = {
          ...state.wishlist,
          ...action.payload.wishlist,
        };
        return nextState;
      });
  },
});

export const selectWishlist = (state) => state.wishlist;

export default wishlistSlice.reducer;
