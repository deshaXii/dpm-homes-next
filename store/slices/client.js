import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { getClientDetails } from "../api/clientAPI";

const initialState = {
  clientData: "",
};

export const getClientInfo = createAsyncThunk(
  "client/getClientInfo",
  async (id) => {
    const responseData = await getClientDetails(id);
    return responseData;
  }
);

export const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getClientInfo.fulfilled, (state, action) => {
        state.clientData = action.payload;
      })
      .addCase(HYDRATE, (state, action) => {
        const nextState = {
          ...state.client,
          ...action.payload.client,
        };
        return nextState;
      });
  },
});

export const selectClient = (state) => state.client;

export default clientSlice.reducer;
