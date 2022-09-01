import { getAppServices } from "../api/servicesAPI";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  servicesData: [],
};

export const getServices = createAsyncThunk(
  "services/getAppServices",
  async (lang) => {
    const responseData = await getAppServices(lang);
    return responseData;
  }
);

export const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getServices.fulfilled, (state, action) => {
        state.servicesData = action.payload;
      })
      .addCase(HYDRATE, (state, action) => {
        const nextState = {
          ...state.services,
          ...action.payload.services,
        };
        return nextState;
      });
  },
});

export const selectServices = (state) => state.services;

export default servicesSlice.reducer;
