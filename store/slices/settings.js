import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { getAppSettings } from "../api/settingsAPI";

const initialState = {
  settingsData: {},
};

export const getSettingsData = createAsyncThunk(
  "settings/getSettings",
  async ({lang, userIp}) => {
    const responseData = await getAppSettings({lang, userIp});
    return responseData;
  }
);

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getSettingsData.fulfilled, (state, action) => {
        state.settingsData = action.payload;
      })
      .addCase(HYDRATE, (state, action) => {
        const nextState = {
          ...state.settings,
          ...action.payload.settings,
        };
        return nextState;
      });
  },
});

export const selectSettings = (state) => state.settings;

export default settingsSlice.reducer;
