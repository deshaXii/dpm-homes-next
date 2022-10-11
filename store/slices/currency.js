import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import {getUserIP, getUserLocationByIP} from "../api/currencyAPI";

const initialState = {
  currency: "aed",
  userIP: null
};

export const getUserLocationIP = createAsyncThunk(
  "currency/getUserLocationIP",
  async () => {
    const responseData = await getUserIP();
    return responseData;
  }
);

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    getCurrency: (state, action) => {
      state.currency = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getUserLocationIP.fulfilled, (state, action) => {
      })
      .addCase(HYDRATE, (state, action) => {
        const nextState = {
          ...state.currency,
          ...action.payload.currency,
        };
        return nextState;
      });
  },
});

export const selectCurrency = (state) => state.currency;

export const { getCurrency } = currencySlice.actions;

export default currencySlice.reducer;
