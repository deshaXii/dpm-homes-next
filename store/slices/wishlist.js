import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { updateWishlist, getAllWishlist } from "../api/wishlistAPI";

const initialState = {
  wishlist: [],
};

export const addPropertyToWishlist = createAsyncThunk(
  "wishlist/update-wishlist",
  async ({ id, lang }) => {
    const responseData = await updateWishlist({ id, lang });
    return responseData;
  }
);

export const getWishlist = createAsyncThunk(
  "wishlist/get-wishlist",
  async ({ token, lang }) => {
    const responseData = await getAllWishlist({ token, lang });
    return responseData;
  }
);

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addPropertyToWishlist.fulfilled, (state, action) => {})
      .addCase(getWishlist.fulfilled, (state, action) => {
        state.wishlist = action.payload.data;
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
