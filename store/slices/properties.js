import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import {
  getProperties,
  addResidentialCashProperty,
  addResidentialInstallmentProperty,
  getPropertyById,
} from "../api/propertiesAPI";

const initialState = {
  allProperties: [],
  property: {},
};

export const getPropertiesWithTpye = createAsyncThunk(
  "properties/getProperty",
  async (type) => {
    const responseData = await getProperties(type);
    return responseData;
  }
);

export const showProperty = createAsyncThunk(
  "properties/showProperty",
  async (id) => {
    const responseData = await getPropertyById(id);
    return responseData;
  }
);

export const addResidentialCash = createAsyncThunk(
  "properties/add-residential-cash",
  async (data) => {
    const responseData = await addResidentialCashProperty(data);
    return responseData;
  }
);

export const addResidentialInstallment = createAsyncThunk(
  "properties/add-residential-installment",
  async (data) => {
    const responseData = await addResidentialInstallmentProperty(data);
    return responseData;
  }
);

export const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPropertiesWithTpye.fulfilled, (state, action) => {
        state.allProperties = action.payload.data;
      })
      .addCase(showProperty.fulfilled, (state, action) => {
        state.property = action.payload;
      })
      .addCase(addResidentialCash.fulfilled, (state, action) => {
        console.log("Cash Added");
      })
      .addCase(addResidentialCash.rejected, (state, action) => {
        console.log("Cash rejected");
      })
      .addCase(addResidentialInstallment.fulfilled, (state, action) => {
        console.log("Installment Added");
      })
      .addCase(HYDRATE, (state, action) => {
        const nextState = {
          ...state.properties,
          ...action.payload.properties,
        };
        return nextState;
      });
  },
});

export const selectProperties = (state) => state.properties;

export default propertiesSlice.reducer;
