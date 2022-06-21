import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { sendMessage } from "../api/contactAPI";

const initialState = {
  message: "",
};

export const contactUs = createAsyncThunk("contact/contactUs", async (data) => {
  const responseData = await sendMessage(data);
  return responseData;
});

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(contactUs.fulfilled, (state, action) => {
        state.message = action.payload.message;
      })
      .addCase(HYDRATE, (state, action) => {
        const nextState = {
          ...state.contact,
          ...action.payload.contact,
        };
        return nextState;
      });
  },
});

export const selectContact = (state) => state.contact;

export default contactSlice.reducer;
