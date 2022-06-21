import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { getCountries, getGovernorates } from "../api/countriesAPI";

const initialState = {
  allCountries: [],
  allGovernorates: [],
};

export const getAllCountries = createAsyncThunk(
  "countries/get-countries",
  async (lang) => {
    const responseData = await getCountries(lang);
    return responseData;
  }
);

export const getAllGovernorates = createAsyncThunk(
  "countries/get-governorates",
  async (data) => {
    const responseData = await getGovernorates(data);
    return responseData;
  }
);

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCountries.fulfilled, (state, action) => {
        state.allCountries = action.payload.data;
      })
      .addCase(getAllGovernorates.fulfilled, (state, action) => {
        state.allGovernorates = action.payload.data;
      })
      .addCase(HYDRATE, (state, action) => {
        const nextState = {
          ...state.countries,
          ...action.payload.countries,
        };
        return nextState;
      });
  },
});


export const selectCountries = (state) => state.countries;

export default countriesSlice.reducer;
