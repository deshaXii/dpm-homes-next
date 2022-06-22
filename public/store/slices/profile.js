import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { updateInformation } from "../api/profileAPI";

const initialState = {
  message: "",
};

export const updateProfile = createAsyncThunk("profile/updateInformation", async (data) => {
  const responseData = await updateInformation(data);
  return responseData;
});

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(updateProfile.fulfilled, (state, action) => {
        
      })
      .addCase(HYDRATE, (state, action) => {
        const nextState = {
          ...state.profile,
          ...action.payload.profile,
        };
        return nextState;
      });
  },
});

export const selectProfile = (state) => state.profile;

export default profileSlice.reducer;
